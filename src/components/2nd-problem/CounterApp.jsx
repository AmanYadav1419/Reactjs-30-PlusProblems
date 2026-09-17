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
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 w-full flex flex-col items-center text-center gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Counter System</h2>

        <div className="flex flex-col items-center gap-2 mb-2">
          <span className="text-7xl font-black font-mono tracking-tighter text-white">
            {count < 10 && count >= 0 ? `0${count}` : count}
          </span>
          <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Current Count</span>
        </div>

        <div className="flex items-center gap-4 w-full">
          <button
            onClick={handleDecrement}
            disabled={count === 0}
            className="flex-1 py-4 bg-[#18181c] hover:bg-white/10 active:scale-95 disabled:opacity-50 disabled:active:scale-100 disabled:cursor-not-allowed border border-white/10 rounded-2xl text-2xl font-bold text-zinc-300 transition-all flex items-center justify-center"
            title="Decrement"
          >
            -
          </button>
          <button
            onClick={handleIncrement}
            className="flex-1 py-4 bg-blue-500 hover:bg-blue-600 active:scale-95 border border-blue-400/50 rounded-2xl text-2xl font-bold text-white transition-all flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            title="Increment"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
