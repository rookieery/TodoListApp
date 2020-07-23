import * as React from 'react'
import FilterLink from './FilterLinkComponent';

export default class Filter extends React.Component {
  render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink filter='All' />
          All
        {', '}
        <FilterLink filter='New' />
          New
        {', '}
        <FilterLink filter='Done' />
          Done
        {', '}
        <FilterLink filter='Expired' />
          Expired
      </p>
    )
  }
}