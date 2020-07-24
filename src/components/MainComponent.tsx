import App from './AppComponent';
import AddTodo from './AddTodoComponent';
import EditTodo from './EditTodoComponent';
import { IReduxState } from '../interfaces/interfaces';
import * as React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state: IReduxState) => {
  return {
    status: state.pageStatus
  }
}

type MainProps = {
  pageStatus?: IReduxState['pageStatus'];
};
@(connect(mapStateToProps) as ClassDecorator)
export default class Main extends React.Component<MainProps> {
  render() {
    switch (this.props.pageStatus) {
      case 'App':
        return <App />;
      case 'Add':
        return <AddTodo />;
      case 'Edit':
        return <EditTodo />;
      default:
        return <App />;
    }
  }
}
