import React from "react";


const initialState = {
    country = {
        name: ""      
    }
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_COUNTRY":
        return {
            ...state,
            name: action.payload  
        }
      default:
          return state,
    }
}