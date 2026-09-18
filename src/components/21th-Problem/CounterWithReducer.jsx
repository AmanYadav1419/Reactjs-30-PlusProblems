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
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inner_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 w-full flex flex-col items-center text-center gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Reducer Counter</h2>

        <div className="flex flex-col items-center gap-2 mb-2">
          <span className="text-7xl font-black font-mono tracking-tighter text-white">
            {state.count < 10 && state.count >= 0 ? `0${state.count}` : state.count}
          </span>
          <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Current Count</span>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            disabled={state.count === 0}
            className="py-4 bg-[#18181c] hover:bg-white/10 active:scale-95 disabled:opacity-50 disabled:active:scale-100 disabled:cursor-not-allowed border border-white/10 rounded-2xl text-2xl font-bold text-zinc-300 transition-all flex items-center justify-center"
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="py-4 bg-blue-500 hover:bg-blue-600 active:scale-95 border border-blue-400/50 rounded-2xl text-2xl font-bold text-white transition-all flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="col-span-2 py-3 bg-red-500/10 hover:bg-red-500/20 active:scale-95 text-red-500 rounded-xl text-sm font-semibold transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterWithReducer;
