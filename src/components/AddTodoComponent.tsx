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
  state = {
    title: '',
    text: '',
    expiredTime: '',
    emailAddress: ''
  }
  private jumpToAppPage = () => {
    this.props.dispatch(actionSetPageType(PageStatus.App));
  }

  private changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      default:
        break;
    }
  }

  private createTodo = () => {
    const todo = {
      id: 0,
      title: this.state.title,
      text: this.state.text,
      createdTime: '0000',
      expiredTime: this.state.expiredTime,
      emailAddress: this.state.emailAddress,
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
          <input type="text" value={this.state.title} name='title' onChange={this.changeValue} />
          <br />
          <label htmlFor="">Text</label>
          <input type="text" value={this.state.text} name='text' onChange={this.changeValue} />
          <br />
          <label htmlFor="">ExpiredTime</label>
          <input type="text" value={this.state.expiredTime} name='expiredTime' onChange={this.changeValue} />
          <br />
          <label htmlFor="">EmailAddress</label>
          <input type="text" value={this.state.emailAddress} name='emailAddress' onChange={this.changeValue} />
          <br />
          <input type='submit' value='Create' />
        </form>
        <a href="javascript:void(0)" onClick={this.jumpToAppPage}>Back to List</a>
      </div>
    )
  }
}