import React, { createContext, useContext, useReducer } from "react";

import config from "./config";
import data from "./data";

const { lastUpdated, relatedTopics, trends } = data;

export const initialState = {
  config,
  focusedMarker: null,
  hasLoaded: false,
  //   lastUpdated,
  markers: trends,
  //   relatedTopics,
  start: false,
  currentCoordinates: [20.5937, 78.9629],
  currentLocationalData: {},
};

export function reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case "LOADED":
      return {
        ...state,
        hasLoaded: true,
      };
    case "START":
      return {
        ...state,
        start: true,
      };
    case "FOCUS":
      return {
        ...state,
        focusedMarker: payload,
      };
    case "COORDINATES":
      return {
        ...state,
        currentCoordinates: payload,
      };
    case "LOCATIONAL":
        const oldTrend = trends;
        console.log(oldTrend);
        oldTrend.push(payload);
      return {
        ...state,
        markers: oldTrend,
        currentCoordinates: payload.coordinates,
        currentLocationalData: payload,
      };
    default:
      return state;
  }
}

const StateContext = createContext(null);

export function StateProvider({ children, initialState, reducer }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateValue() {
  return useContext(StateContext);
}
