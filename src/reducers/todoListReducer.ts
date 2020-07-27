import { IReduxState, ToDoStatus } from "../interfaces/interfaces";


const todoList = (state: IReduxState['todoList'] = [], action: { type: string; } & any) => {
  switch (action.type) {
    case 'TODO_ADD':
      return [
        ...state,
        {
          id: action.id,
          title: action.todo.title,
          text: action.todo.text,
          createdTime: String(new Date()),// TODO
          expiredTime: action.todo.expiredTime,
          emailAddress: action.todo.emailAddress,
          status: ToDoStatus.New,
        }
      ]
    case 'TODO_EDIT':
      return state.map(todo =>
        (todo.id === action.id)
          ? {
            id: todo.id,
            title: action.todo.title,
            text: action.todo.text,
            createdTime: todo.createdTime,
            expiredTime: action.todo.expiredTime,
            emailAddress: action.todo.emailAddress,
            status: action.todo.status, // TODO
          }
          : todo
      )
    case 'TODO_DELETE':
      return state.filter(todo => todo.id != action.id)
    case 'TODO_STATUS':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, status: action.status }
          : todo
      )
    default:
      return state
  }
}

export default todoList;