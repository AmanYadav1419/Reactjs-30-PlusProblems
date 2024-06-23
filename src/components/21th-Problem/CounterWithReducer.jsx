// question :- Create a simple counter applciation using useReducer to manage state.

import React, { useReducer } from "react";

const CounterWithReducer = () => {
  const reducerFun = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        };
      case "DECREMENT":
        if (state.count > 0) {
            return {
            count: state.count - 1,
          };
        }

      case "RESET":
        return {
          count: (state = 0),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFun, { count: 0 });

  return (
    <div>
      <h1>Counter App With UseReducer:</h1>
      <h3>Count :{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default CounterWithReducer;
