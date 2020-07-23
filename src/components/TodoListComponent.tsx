import * as React from 'react'
import { IReduxState } from '../interface/interface';
import { connect } from 'react-redux';


const mapStateToProps = (state: IReduxState) => {
  return {
    status:state.todoList
  }
}

type TodoListProps = {
  todoList?: IReduxState['todoList'];
};
@(connect(mapStateToProps) as ClassDecorator)
export default class TodoList extends React.Component<TodoListProps> {

}