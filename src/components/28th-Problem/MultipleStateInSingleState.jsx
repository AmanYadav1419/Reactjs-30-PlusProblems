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
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-lg mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-8">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Multi-State Controller</h2>

        {/* State Display Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#18181c] border border-white/5 rounded-xl p-4 flex flex-col items-center gap-2">
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Count</span>
            <span className="text-3xl font-mono font-bold text-white">{state.count}</span>
          </div>

          <div className="bg-[#18181c] border border-white/5 rounded-xl p-4 flex flex-col items-center gap-2">
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Text</span>
            <span className="text-lg font-medium text-blue-400 truncate w-full text-center">{state.text}</span>
          </div>

          <div className="bg-[#18181c] border border-white/5 rounded-xl p-4 flex flex-col items-center gap-2">
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Status</span>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-3 h-3 rounded-full ${state.isActive ? 'bg-emerald-400' : 'bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]'}`} />
              <span className="text-sm font-semibold text-white uppercase">{state.isActive ? "Active" : "Inactive"}</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
          <button
            onClick={handleINCREMENTcount}
            className="py-3 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 rounded-xl text-sm font-semibold text-white transition-all flex justify-center items-center gap-2"
          >
            Increment
          </button>
          <button
            onClick={handleTextChange}
            className="py-3 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 rounded-xl text-sm font-semibold text-white transition-all flex justify-center items-center gap-2"
          >
            Update Text
          </button>
          <button
            onClick={handleToggleActive}
            className="py-3 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 rounded-xl text-sm font-semibold text-white transition-all flex justify-center items-center gap-2"
          >
            Toggle Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultipleStateInSingleState;
