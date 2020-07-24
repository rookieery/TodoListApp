import { IReduxState } from "../interfaces/interfaces";

const pageType = (state: IReduxState['pageStatus'], action: { type: string; } & any) => {
  switch (action.type) {
    case 'SET_PAGE_TYPE':
      return action.page;
    default:
      return state;
  }
}
export default pageType;