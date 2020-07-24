import { IReduxState, PageStatus } from "../interfaces/interfaces";

const pageStatus = (state: IReduxState['pageStatus'] = PageStatus.App, action: { type: string; } & any) => {
  switch (action.type) {
    case 'SET_PAGE_TYPE':
      return action.page;
    default:
      return state;
  }
}
export default pageStatus;