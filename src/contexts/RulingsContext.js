import { createContext, useReducer } from "react";

import RulingReducer from "../reducers/RulingReducer";

const RulingsContext = createContext();
const initialState = [];

const RulingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RulingReducer, initialState);

  return (
    <RulingsContext.Provider value={{ state, dispatch }}>
      { children }
    </RulingsContext.Provider>
  )
}

export {
  RulingProvider,
  RulingsContext
};
