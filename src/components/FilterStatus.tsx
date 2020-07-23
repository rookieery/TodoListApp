import * as React from 'react';
import { connect } from 'react-redux';

import { IReduxState, FilterStatus } from '../interface/interface';

const mapStateToProps = (state: IReduxState) => {
  return {
    c1: 1,
    c2: 2,
  };
};

export type FilterStatusProps = {
  active?: boolean;
  status: FilterStatus;
  onClick: () => void;

  c1?: number;
  c2?: number;
};
type FilterStatusLabelState = {

};
// type IAppState = {
//   value?: string;
// }

// 
@(connect(mapStateToProps) as ClassDecorator)
export class FilterStatusLabel extends React.Component<FilterStatusProps, FilterStatusLabelState> {
  
}
