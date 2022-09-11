const actions = {
  update: 'UPDATE_STATE',
  saveVote: 'SAVE_VOTE'
}

const RulingReducer = (state, action) => {
  switch(action.type) {
    case actions.update:
      return action.payload;
    default:
      return state;
  }
}

export default RulingReducer;
