import Filter from './FilterComponent';
import TodoList from './TodoListComponent';
import * as React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionSetPageType } from '../actions/actions';
import { PageStatus } from '../interfaces/interfaces';

type AppProps = {
  dispatch?: Dispatch;
}

@(connect() as ClassDecorator)
export default class App extends React.Component<AppProps> {
  private jumpToAddPage = () => {
    this.props.dispatch(actionSetPageType(PageStatus.Add));
  }
  render() {
    return (
      <div className = 'container'>
        <h2>TodoList</h2>
        <a href="#" onClick={this.jumpToAddPage}>Create New</a>
        <Filter />
        <TodoList />
      </div>
    )
  }
}
