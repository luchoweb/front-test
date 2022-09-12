import { dispatchActions } from "../helpers";

const RulingReducer = (state, action) => {
  switch(action.type) {
    case dispatchActions.UPDATE_STATE:
      return action.payload;

    case dispatchActions.UPDATE_VOTE:
      const newState = state.filter(item => item.id !== action.payload.docId);
      const itemToUpdate = state.filter(item => item.id === action.payload.docId);

      return [
        {
          id: action.payload.docId,
          data: {
            ...itemToUpdate[0].data,
            votes: action.payload.votes
          }
        },
        ...newState
      ];

    default:
      return state;
  }
}

export default RulingReducer;
