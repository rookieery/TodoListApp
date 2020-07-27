import * as React from 'react'
import { IReduxState, IToDo, PageStatus, ToDoStatus } from '../interfaces/interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionSetPageType, actionEditTodo } from '../actions/actions';

const mapStateToProps = (state: IReduxState) => {
  return {
    todo: state.todoList.find(todo => todo.id === state.id),
  }
}

type EditTodoProps = {
  todo?: IToDo;
  dispatch?: Dispatch;
};

@(connect(mapStateToProps) as ClassDecorator)
export default class EditTodo extends React.Component<EditTodoProps> {
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
        this.setState({ status: e.target.value });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <h3>Edit</h3>
        <form action="javascript:void(0)" onSubmit={this.saveTodo}>
          <label htmlFor="">Title</label>
          <input type="text" name='title' value={this.state.title} onChange={this.changeValue} />
          <br />
          <label htmlFor="">Text</label>
          <input type="text" name='text' value={this.state.text} onChange={this.changeValue} />
          <br />
          <label htmlFor="">ExpiredTime</label>
          <input type="text" name='expiredTime' value={this.state.expiredTime} onChange={this.changeValue} />
          <br />
          <label htmlFor="">EmailAddress</label>
          <input type="text" name='emailAddress' value={this.state.emailAddress} onChange={this.changeValue} />
          <br />
          <label htmlFor="">Status</label>
          <select name='status' value={this.state.status} onChange={this.changeValue}>
            <option >{ToDoStatus.New}</option>
            <option >{ToDoStatus.Done}</option>
          </select>
          <br />
          <input type='submit' value='Save' />
        </form>
        <a href="javascript:void(0)" onClick={this.jumpToAppPage}>Back to List</a>
      </div>
    )
  }
}