import React, { createContext, useContext, useReducer } from "react";

// Prepare the Data-Layer
export const StateContext = createContext();

// Wrap your app around the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Function to enable Data Layer access
export const useStateValue = () => useContext(StateContext);
