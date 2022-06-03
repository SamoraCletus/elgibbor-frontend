import React, { createContext, useReducer } from "react";

const initialState = {
  studentClass: "",
};
const ClassContext = createContext({ initialState });
function reducer(state, action) {
  switch (action.type) {
    case "SET_CLASS":
      return {
        ...state,
        studentClass: action.payload,
      };
    default:
      return state;
  }
}

function ClassProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeClass = (classValue) => {
    // change class
    dispatch({
      type: "SET_CLASS",
      payload: classValue,
    });
  };
  return (
    <ClassContext.Provider
      value={{ studentClass: state.studentClass, changeClass }}
      {...props}
    />
  );
}
export { ClassContext, ClassProvider };
