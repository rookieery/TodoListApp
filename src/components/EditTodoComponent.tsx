import * as React from 'react'
import { IReduxState, IToDo } from '../interfaces/interfaces';
import { connect } from 'react-redux';

const mapStateToProps = (state: IReduxState) => {
  return {
    todo: state.todoList.find(todo => todo.id === state.id),
  }
}

type EditTodoProps = {
  todo?: IToDo
};
@(connect(mapStateToProps) as ClassDecorator)
export default class EditTodo extends React.Component<EditTodoProps> {
  render() {
    return (
      <div>
        <form action="">

        </form>
        <a href="">Back to List</a>
      </div>
    )
  }
}