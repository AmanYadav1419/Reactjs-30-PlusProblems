// quesiton :- Implement a basic toggle switch component

import React, { useState } from "react";

const ToggleSwitch = () => {
  const [istoggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!istoggle);
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-xs mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col items-center gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Toggle Switch</h2>
        <button
          onClick={handleToggle}
          className={`relative w-16 h-9 rounded-full transition-colors duration-300 focus:outline-none ${istoggle ? 'bg-blue-500' : 'bg-zinc-700'}`}
          role="switch"
          aria-checked={istoggle}
        >
          <span className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-300 ${istoggle ? 'translate-x-7' : 'translate-x-0'}`} />
        </button>
        <span className={`text-sm font-semibold tracking-wider uppercase ${istoggle ? 'text-blue-400' : 'text-zinc-500'}`}>
          {istoggle ? "ON" : "OFF"}
        </span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
