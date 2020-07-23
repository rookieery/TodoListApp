import { IReduxState } from "../interface/interface";

const filterStatus = (state: IReduxState["filterStatus"], action: any) => {
  switch (action.type) {
    case 'SET_FILTER_TYPE':
      return action.filter
    default:
      return state
  }
}

export default filterStatus;