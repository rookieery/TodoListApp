import * as React from 'react'
import { IReduxState, FilterStatus, ToDoStatus, PageStatus, IToDo } from '../interfaces/interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionSetPageType, actionDeleteTodo, actionJumpPageId, actionSetStatusType } from '../actions/actions';
import isExpired from '../utils/checkExpired';


const mapStateToProps = (state: IReduxState) => {
  return {
    todoList: state.todoList,
    status: state.filterStatus
  }
}

type TodoListProps = {
  todoList?: IReduxState['todoList'];
  status?: FilterStatus;
  dispatch?: Dispatch;
};

@(connect(mapStateToProps) as ClassDecorator)
export default class TodoList extends React.Component<TodoListProps> {

  private getVisibleTodoS = () => {
    switch (this.props.status) {
      case FilterStatus.New:
        return this.props.todoList.filter(todo => todo.status === ToDoStatus.New && !isExpired(todo.expiredTime));
      case FilterStatus.Done:
        return this.props.todoList.filter(todo => todo.status === ToDoStatus.Done && !isExpired(todo.expiredTime));
      case FilterStatus.Expired:
        return this.props.todoList.filter(todo => isExpired(todo.expiredTime));
      case FilterStatus.All:
      default:
        return this.props.todoList;
    }
  }

  private jumpToEditPage = (id: number) => {
    this.props.dispatch(actionJumpPageId(id));
    this.props.dispatch(actionSetPageType(PageStatus.Edit));
  }

  private deleteHandler = (id: number) => {
    const result = window.confirm('Are you sure?');
    if (result) {
      this.props.dispatch(actionDeleteTodo(id));
    }
  }

  private changeValue = (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
    this.props.dispatch(actionSetStatusType(id, e.target.value as ToDoStatus));
  }

  private renderStatus = (todo: IToDo) => (
    isExpired(todo.expiredTime)
      ?
      <td>
        {'Expired'}
      </td>
      :
      <td>
        <select name='status' value={todo.status} onChange={(e) => {
          return this.changeValue(e, todo.id);
        }}>
          <option >{ToDoStatus.New}</option>
          <option >{ToDoStatus.Done}</option>
        </select>
      </td>
  )

  private renderTodo = (todo: IToDo) => (
    <tr key={todo.id}>
      {
        Object.values(todo)
          .filter(value => (Object.values(todo).indexOf(value) <= 5))
          .map((value, index) => <td key={index}>{value}</td>)
      }
      {
        this.renderStatus(todo)
      }
      <td>
        <a href="#" onClick={() => {
          return this.jumpToEditPage(todo.id);
        }}>Edit</a>
        {" | "}
        <a href="#" onClick={() => {
          return this.deleteHandler(todo.id);
        }}>Delete</a>
      </td>
    </tr>
  )


  render() {
    const todoList = this.getVisibleTodoS();
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Text</th>
            <th>CreatedTime</th>
            <th>ExpiredTime</th>
            <th>EmailAddress</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todoList.map(this.renderTodo)}
        </tbody>
      </table >
    )
  }
}