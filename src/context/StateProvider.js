import React, { createContext, useReducer } from 'react';

export const stateContext = createContext();

export const initialState = {
  currentTime: new Date(),
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ELAPSED_TIME':
      return { ...state.currentTime, ...action.payload };
    case 'UPDATED_TIME':
      return { ...state.currentTime, ...action.payload };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <stateContext.Provider value={{ globalState, dispatch }}>
      {children}
    </stateContext.Provider>
  );
};
