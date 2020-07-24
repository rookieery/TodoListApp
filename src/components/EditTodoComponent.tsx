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
    title: '',
  }
  private jumpToAppPage = () => {
    this.props.dispatch(actionSetPageType(PageStatus.App));
  }

  private saveTodo = (e: any) => {
    const todo = {
      id: this.props.todo.id,
      title: (e.target)['0'].value,
      text: (e.target)['1'].value,
      createdTime: this.props.todo.createdTime,
      expiredTime: (e.target)['2'].value,
      emailAddress: (e.target)['3'].value,
      status: (e.target)['4'].value
    };
    this.props.dispatch(actionEditTodo(this.props.todo.id, todo));
    this.jumpToAppPage();
  }

  private changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.setState({ title:e.target.value })
  }

  render() {
    return (
      <div>
        <h3>Edit</h3>
        <form action="javascript:void(0)" onSubmit={this.saveTodo}>
          <label htmlFor="">Title</label>
          <input type="text" value={this.state.title} onChange={this.changeValue}/>
          <br />
          <label htmlFor="">Text</label>
          <input type="text" value={this.props.todo.text} />
          <br />
          <label htmlFor="">ExpiredTime</label>
          <input type="text" value={this.props.todo.expiredTime} />
          <br />
          <label htmlFor="">EmailAddress</label>
          <input type="text" value={this.props.todo.emailAddress} />
          <br />
          <label htmlFor="">Status</label>
          <select name="" id="">
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