import { IReduxState } from "../interfaces/interfaces";

const id = (state: IReduxState['id'] = 0, action: { type: string; } & any) => {
  switch (action.type) {
    case 'JUMP_PAGE_ID':
      return action.id;
    default:
      return state;
  }
}
export default id;