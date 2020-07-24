import {combineReducers} from 'redux';
import todoList from './todoListReducer';
import filterStatus from './filterReducer';
import pageStatus from './pageReducer';
import id from './idReducer';

const todoApp = combineReducers({
  todoList,
  filterStatus,
  pageStatus,
  id,
});

export default todoApp;