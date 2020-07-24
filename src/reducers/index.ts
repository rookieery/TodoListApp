import {combineReducers} from 'redux';
import todoList from './todoListReducer';
import filterStatus from './filterReducer';
import pageType from './pageReducer';

const todoApp = combineReducers({
  todoList,
  filterStatus,
  pageType,
});

export default todoApp;