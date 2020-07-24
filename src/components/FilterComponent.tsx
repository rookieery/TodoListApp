import * as React from 'react'
import FilterLink from './FilterLinkComponent';
import { FilterStatus } from '../interfaces/interfaces';

export default class Filter extends React.Component {
  render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink filter={FilterStatus.All} />
        {', '}
        <FilterLink filter={FilterStatus.New} />
        {', '}
        <FilterLink filter={FilterStatus.Done} />
        {', '}
        <FilterLink filter={FilterStatus.Expired} />
      </p>
    )
  }
}