// question :-  Work with multiple states in a single state object. The component should display the following informationn on the screen:
// 1. A count value, initially set to 0.
// 2. A text value, initially set to 'Hello World!'.
// 3. An "Active" status, initially set to true.

import React, { useState } from "react";

const MultipleStateInSingleState = () => {
  const [state, setState] = useState({
    count: 0,
    text: "Hello World!!",
    isActive: true,
  });

  const handleINCREMENTcount = () => {
    setState({ ...state, count: state.count + 1 });
  };

  const handleTextChange = () => {
    setState({ ...state, text: "Updated Text" });
  };

  const handleToggleActive = () => {
    setState({ ...state, isActive: !state.isActive });
  };

  return (
    <div>
      <h1>Multiple State Example</h1>
      <p>Count: {state.count}</p>
      <p>Text: {state.text}</p>
      <p>Active: {state.isActive ? "yes" : "no"}</p>

      {/* button for count */}
      <button onClick={handleINCREMENTcount}>INC</button>

      {/* btn for change text */}
      <button onClick={handleTextChange}>Text Change</button>

      {/* button for  toggle state */}
      <button onClick={handleToggleActive}>Toggle Active</button>
    </div>
  );
};

export default MultipleStateInSingleState;
