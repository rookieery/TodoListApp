import * as React from 'react'
import { IReduxState, FilterStatus, ToDoStatus, PageStatus } from '../interfaces/interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionSetPageType, actionDeleteTodo, actionJumpPageId } from '../actions/actions';


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
        return this.props.todoList.filter(todo => todo.status === ToDoStatus.New);
      case FilterStatus.Done:
        return this.props.todoList.filter(todo => todo.status === ToDoStatus.Done);
      case FilterStatus.Expired:
        return this.props.todoList.filter(todo => todo.status === ToDoStatus.Expired);
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

  render() {
    const todoList = this.getVisibleTodoS();
    return (
      <table>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Text</th>
          <th>CreatedTime</th>
          <th>ExpiredTime</th>
          <th>EmailAddress</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          {todoList.map(todo => (
            <tr>{
              Object.values(todo).map(value =>//TODO status
                <td>{value}</td>
              )
            }
              <td>
                <a href="javascript:void(0)" onClick={() => {
                  return this.jumpToEditPage(todo.id);
                }}>Edit</a>
                {" | "}
                <a href="javascript:void(0)" onClick={() => {
                  return this.deleteHandler(todo.id);
                }}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table >
    )
  }
}