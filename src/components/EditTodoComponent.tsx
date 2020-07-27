import * as React from 'react'
import { IReduxState, IToDo, PageStatus, ToDoStatus } from '../interfaces/interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionSetPageType, actionEditTodo } from '../actions/actions';
import checkAll from '../utils/checkAll';

const mapStateToProps = (state: IReduxState) => {
  return {
    todo: state.todoList.find(todo => todo.id === state.id),
  }
}

type EditTodoProps = {
  todo?: IToDo;
  dispatch?: Dispatch;
};
type EditTodoStates = {
  title: string;
  text: string;
  expiredTime: string;
  emailAddress: string;
  status: ToDoStatus;
}
@(connect(mapStateToProps) as ClassDecorator)
export default class EditTodo extends React.Component<EditTodoProps, EditTodoStates> {
  state = {
    title: this.props.todo.title,
    text: this.props.todo.text,
    expiredTime: this.props.todo.expiredTime,
    emailAddress: this.props.todo.emailAddress,
    status: this.props.todo.status,
  }
  private jumpToAppPage = () => {
    this.props.dispatch(actionSetPageType(PageStatus.App));
  }

  private saveTodo = () => {
    if (!checkAll(this.state)) {
      return;
    }
    const todo = {
      id: this.props.todo.id,
      title: this.state.title,
      text: this.state.text,
      createdTime: this.props.todo.createdTime,
      expiredTime: this.state.expiredTime,
      emailAddress: this.state.emailAddress,
      status: this.state.status
    };
    this.props.dispatch(actionEditTodo(this.props.todo.id, todo));
    this.jumpToAppPage();
  }

  private changeValue = (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    switch (e.target.name) {
      case 'title':
        this.setState({ title: e.target.value });
        break;
      case 'text':
        this.setState({ text: e.target.value });
        break;
      case 'expiredTime':
        this.setState({ expiredTime: e.target.value });
        break;
      case 'emailAddress':
        this.setState({ emailAddress: e.target.value });
        break;
      case 'status':
        this.setState({ status: e.target.value as ToDoStatus });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className='container'>
        <h2>Edit</h2>
        <form action="javascript:void(0)" onSubmit={this.saveTodo}>
          <label htmlFor="">Title</label>
          <input type="text" className='form-control' name='title' value={this.state.title} onChange={this.changeValue} />
          <span id='title'></span>
          <br />
          <label htmlFor="">Text</label>
          <input type="text" className='form-control' name='text' value={this.state.text} onChange={this.changeValue} />
          <span id='text'></span>
          <br />
          <label htmlFor="">ExpiredTime</label>
          <input type="text" className='form-control' name='expiredTime' value={this.state.expiredTime} onChange={this.changeValue} />
          <span id='expiredTime'></span>
          <br />
          <label htmlFor="">EmailAddress</label>
          <input type="text" className='form-control' name='emailAddress' value={this.state.emailAddress} onChange={this.changeValue} />
          <span id='emailAddress'></span>
          <br />
          <label htmlFor="">Status</label>
          <select name='status' className='form-control' value={this.state.status} onChange={this.changeValue}>
            <option >{ToDoStatus.New}</option>
            <option >{ToDoStatus.Done}</option>
          </select>
          <br />
          <input type='submit' className='btn-primary' value='Save' />
        </form>
        <a href="javascript:void(0)" onClick={this.jumpToAppPage}>Back to List</a>
      </div>
    )
  }
}