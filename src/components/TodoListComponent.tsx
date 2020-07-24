import * as React from 'react'
import { IReduxState } from '../interfaces/interfaces';
import { connect } from 'react-redux';


const mapStateToProps = (state: IReduxState) => {
  return {
    todoList:state.todoList
  }
}

type TodoListProps = {
  todoList?: IReduxState['todoList'];
};
@(connect(mapStateToProps) as ClassDecorator)
export default class TodoList extends React.Component<TodoListProps> {

}