// question :- Build a draggable component using useReducer to manage its position.

import React, { useReducer, useState } from "react";

const DragableComponentWithReducer = () => {
  function boxReducer(state, action) {
    switch (action.type) {
      case "MOVE":
        return {
          ...state,
          left: action.payload.left,
          top: action.payload.top,
        };
      default:
        return state;
    }
  }

  const [boxState, dispatch] = useReducer(boxReducer, { left: 0, top: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMousedown = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX - boxState.left);
    setInitialY(e.clientY - boxState.top);
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    // console.log(e.clientX);
    if (isDragging) {
      const left = e.clientX - initialX;
      const top = e.clientY - initialY;
      dispatch({ type: "MOVE", payload: { left, top } });
    }
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full h-[400px] border border-white/5 rounded-2xl relative overflow-hidden bg-black/20">
      <div className="absolute top-4 left-4">
        <h2 className="text-zinc-500 font-medium text-xs tracking-widest uppercase">Draggable Area</h2>
      </div>
      <div
        onMouseDown={handleMousedown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        className={`absolute p-6 rounded-2xl border transition-shadow select-none flex flex-col items-center justify-center gap-2 ${isDragging
            ? 'bg-blue-500/20 border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] cursor-grabbing'
            : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 cursor-grab backdrop-blur-xl shadow-xl'
          }`}
        style={{ left: boxState.left, top: boxState.top }}
      >
        <div className="w-10 h-1 rounded-full bg-white/20 mb-2" />
        <h2 className="text-sm font-semibold text-white tracking-wider whitespace-nowrap">Drag Me Around</h2>
      </div>
    </div>
  );
};

export default DragableComponentWithReducer;
