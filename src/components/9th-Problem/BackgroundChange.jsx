// question :- Create a component that changes its background color when clicked .

import React, { useState } from "react";

const BackgroundChange = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColorChange = () => {
    const newColor = backgroundColor === "white" ? "lightblue" : "white";
    setBackgroundColor(newColor);
  };

  return (
    <div onClick={handleColorChange} 
      style={{
        backgroundColor,
        width: "800px",
        height: "800px",
        cursor: "pointer",
      }}
    >
      Click me to Change Color
    </div>
  );
};

// video start from 46:30

export default BackgroundChange;