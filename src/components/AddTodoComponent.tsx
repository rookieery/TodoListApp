import * as React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionSetPageType, actionAddTodo } from '../actions/actions';
import { PageStatus, ToDoStatus } from '../interfaces/interfaces';

type AddProps = {
  dispatch?: Dispatch;
}

@(connect() as ClassDecorator)
export default class AddTodo extends React.Component<AddProps> {
  private jumpToAppPage = () => {
    this.props.dispatch(actionSetPageType(PageStatus.App));
  }

  private createTodo = (e: any) => {
    const todo = {
      id: 0,
      title: (e.target)['0'].value,
      text: (e.target)['1'].value,
      createdTime: '0000',
      expiredTime: (e.target)['2'].value,
      emailAddress: (e.target)['3'].value,
      status: ToDoStatus.New
    };
    this.props.dispatch(actionAddTodo(todo));
    this.jumpToAppPage();
  }

  render() {
    return (
      <div>
        <h3>Add</h3>
        <form action="javascript:void(0)" onSubmit={this.createTodo}>
          <label htmlFor="">Title</label>
          <input type="text" />
          <br />
          <label htmlFor="">Text</label>
          <input type="text" />
          <br />
          <label htmlFor="">ExpiredTime</label>
          <input type="text" />
          <br />
          <label htmlFor="">EmailAddress</label>
          <input type="text" />
          <br />
          <input type='submit' value='Create' />
        </form>
        <a href="javascript:void(0)" onClick={this.jumpToAppPage}>Back to List</a>
      </div>
    )
  }
}