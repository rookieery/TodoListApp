export enum ToDoStatus {
  New = 'New',
  Done = 'Done',
  Expired = 'Expired',
}
export enum FilterStatus {
  All = 'All',
  New = 'New',
  Done = 'Done',
  Expired = 'Expired',
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
}

