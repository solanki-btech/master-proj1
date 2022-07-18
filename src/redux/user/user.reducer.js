import { UserActionTypes } from "./user.actionTypes";

const intialState = {
  currentUser: null
}

const userReducer = (state=intialState, action) => {
  switch(action.type) {
    case UserActionTypes.SET_CURRENT_USER: 
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
    
}

export { userReducer };