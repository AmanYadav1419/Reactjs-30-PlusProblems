// question :- Create a component that changes its background color when clicked .

import React, { useState } from "react";

const BackgroundChange = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColorChange = () => {
    const newColor = backgroundColor === "white" ? "lightblue" : "white";
    setBackgroundColor(newColor);
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-md mx-auto">
      <div
        onClick={handleColorChange}
        className="w-full aspect-square max-w-sm rounded-2xl cursor-pointer flex items-center justify-center border border-white/10 transition-colors duration-500"
        style={{ backgroundColor }}
      >
        <p className={`text-lg font-semibold ${backgroundColor === 'white' ? 'text-zinc-800' : 'text-zinc-700'} select-none`}>
          Click to change color
        </p>
      </div>
    </div>
  );
};


export default BackgroundChange;