import * as React from 'react'
import { IToDo } from '../interface/interface';
import { connect } from 'react-redux';

const mapStateToProps = (state: IReduxState) => {
  return {
    status:state.filterStatus
  }
}

type EditTodoProps = {
  todo: IToDo;
  id:number;
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