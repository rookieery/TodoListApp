import { IToDo, ToDoStatus, FilterStatus } from '../interface/interface';

let nextTodoId = 0;
const TODO_ADD = 'TODO_ADD';
export const actionAddTodo = (todo: IToDo) => ({
  type: TODO_ADD,
  id: nextTodoId++,
  todo
});

const TODO_EDIT = 'TODO_EDIT';
export const actionEditTodo = (id: number, todo: IToDo) => ({
  type: TODO_EDIT,
  id,
  todo
});

const TODO_DELETE = 'TODO_DELETE';
export const actionDeleteTodo = (id: number) => ({
  type: TODO_DELETE,
  id
});

//TODO
const TODO_STATUS = 'TODO_STATUS';
export const actionSetStatusType = (id: number, status: ToDoStatus) => ({
  type: TODO_STATUS,
  id,
  status
});

const SET_FILTER_TYPE = 'SET_FILTER_TYPE';
//TODO
export const actionSetFilterType = (filter: FilterStatus) => ({
  type: SET_FILTER_TYPE,
  filter
});


