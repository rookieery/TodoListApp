import * as React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionSetPageType, actionAddTodo } from '../actions/actions';
import { PageStatus, ToDoStatus } from '../interfaces/interfaces';
import checkAll from '../utils/checkAll';



type AddProps = {
  dispatch?: Dispatch;
}
type AddStates = {
  title: string;
  text: string;
  expiredTime: string;
  emailAddress: string;
}
@(connect() as ClassDecorator)
export default class AddTodo extends React.Component<AddProps, AddStates> {
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
    if (!checkAll(this.state)) {
      return;
    }
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
      <div className='container'>
        <h2>Add</h2>
        <form action="#" onSubmit={this.createTodo}>
          <label htmlFor="">Title</label>
          <input type="text" className='form-control' value={this.state.title} name='title' onChange={this.changeValue} />
          <span id='title'></span>
          <br />
          <label htmlFor="">Text</label>
          <input type="text" className='form-control' value={this.state.text} name='text' onChange={this.changeValue} />
          <span id='text'></span>
          <br />
          <label htmlFor="">ExpiredTime</label>
          <input type="date" className='form-control' value={this.state.expiredTime} name='expiredTime' onChange={this.changeValue} />
          <span id='expiredTime'></span>
          <br />
          <label htmlFor="">EmailAddress</label>
          <input type="text" className='form-control' value={this.state.emailAddress} name='emailAddress' onChange={this.changeValue} />
          <span id='emailAddress'></span>
          <br />
          <input type='submit' className='btn-primary' value='Create' />
        </form>
        <a href="#" onClick={this.jumpToAppPage}>Back to List</a>
      </div>
    )
  }
}