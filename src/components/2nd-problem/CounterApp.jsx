// problem statment :- Build a counter application with increament and decreament buttons.

import React, { useState } from "react";

const CounterApp = () => {
  // here we use useState for state mangment , and 0 is initial count
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count === 0 ? count : count - 1);
  };

  return (
    <div>
      <div>
        {/* show count */}
        <h1>Count is : {count} </h1>
        <div>
          {/* button for increament & decrement */}
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
