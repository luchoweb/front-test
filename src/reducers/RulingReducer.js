import { dispatchActions } from "../helpers";

const RulingReducer = (state, action) => {
  switch(action.type) {
    case dispatchActions.UPDATE_STATE:
      return action.payload;
    default:
      return state;
  }
}

export default RulingReducer;
