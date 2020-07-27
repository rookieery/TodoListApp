export enum ToDoStatus {
  New = 'New',
  Done = 'Done',
}
export enum FilterStatus {
  All = 'All',
  New = 'New',
  Done = 'Done',
  Expired = 'Expired',
}

export enum PageStatus {
  App = 'App',
  Add = 'Add',
  Edit = 'Edit',
}

export type IToDo = {
  id: number;
  title: string;
  text: string;
  createdTime: string;
  expiredTime: string;
  emailAddress: string;
  status: ToDoStatus;
}

export type IReduxState = {
  todoList: Array<IToDo>;
  filterStatus: FilterStatus;
  pageStatus: PageStatus;
  id: number;
}

