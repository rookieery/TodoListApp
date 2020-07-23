import {combineReducers} from 'redux';
import todoList from './todoListReducer';
import filterStatus from './filterReducer';

const todoApp = combineReducers({
  todoList,
  filterStatus
});

export default todoApp;