import React from "react";

const initialState = {
  formData: "",
  country: {
    name: "",
    language: ""
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRY":
      return {
        ...state,
        name: action.payload
      };
    case "UPDATE_FORM":
      return {
        ...state,
        formData: action.payload
      };
    default:
      return state;
  }
};
