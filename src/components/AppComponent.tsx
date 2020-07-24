import Filter from './FilterComponent';
import TodoList from './TodoListComponent';
import * as React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <a href="">Create New</a>
        <Filter />
        <TodoList />
      </div>
    )
  }
}
