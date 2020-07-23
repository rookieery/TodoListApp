import * as React from 'react'
import { IReduxState, FilterStatus } from '../interface/interface';
import { connect } from 'react-redux';

const mapStateToProps = (state: IReduxState) => {
  return {
    status:state.filterStatus
  }
}

type FilterStatusProps = {
  filter: string;
  status?: FilterStatus;
};
@(connect(mapStateToProps) as ClassDecorator)
export default class FilterLink extends React.Component<FilterStatusProps> {

}