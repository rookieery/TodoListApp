import * as React from 'react'
import { IReduxState, FilterStatus } from '../interfaces/interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionSetFilterType } from '../actions/actions';

const mapStateToProps = (state: IReduxState) => {
  return {
    status: state.filterStatus
  }
}

type FilterStatusProps = {
  filter: FilterStatus;
  status?: FilterStatus;
  dispatch?: Dispatch;
};
@(connect(mapStateToProps) as ClassDecorator)
export default class FilterLink extends React.Component<FilterStatusProps> {
  private filterTodoList = () => {
    this.props.dispatch(actionSetFilterType(this.props.filter))
  }
  render() {
    if (this.props.filter === this.props.status) {
      return <span>{this.props.filter}</span>
    }
    return (
      <a href="#" onClick={this.filterTodoList} >{this.props.filter}</a>
    )
  }
}