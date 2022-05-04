import { useState } from "react";
const initializeValue = 0;

export const getIdReducer = (state = initializeValue, action) => {
  switch ((action.type)) {
    case "getId":
      return  state= action.id ;
    default:
      return initializeValue;
  }
};
