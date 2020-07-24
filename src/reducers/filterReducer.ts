import { IReduxState, FilterStatus } from "../interfaces/interfaces";

const filterStatus = (state: IReduxState['filterStatus'] = FilterStatus.All, action: { type: string; } & any) => {
  switch (action.type) {
    case 'SET_FILTER_TYPE':
      return action.filter;
    default:
      return state
  }
}

export default filterStatus;