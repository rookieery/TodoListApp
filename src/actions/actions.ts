import { IToDo, ToDoStatus, FilterStatus, PageStatus } from '../interfaces/interfaces';

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


const TODO_STATUS = 'TODO_STATUS';
export const actionSetStatusType = (id: number, status: ToDoStatus) => ({
  type: TODO_STATUS,
  id,
  status
});

const SET_FILTER_TYPE = 'SET_FILTER_TYPE';
export const actionSetFilterType = (filter: FilterStatus) => ({
  type: SET_FILTER_TYPE,
  filter
});

const SET_PAGE_TYPE = 'SET_PAGE_TYPE';
export const actionSetPageType = (page: PageStatus) => ({
  type: SET_PAGE_TYPE,
  page
});

const JUMP_PAGE_ID = 'JUMP_PAGE_ID';
export const actionJumpPageId = (id: number) => ({
  type: JUMP_PAGE_ID,
  id
});
