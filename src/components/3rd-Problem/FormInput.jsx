// problem statment :- Create a form that takes user input and displays it in real-time.

import React, { useState } from "react";

const FormInput = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Real-Time Input</h2>
        <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
          <label className="text-xs text-zinc-500 font-medium">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type something..."
            className="w-full bg-[#18181c] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
          />
        </form>
        <div className="pt-4 border-t border-white/5">
          <p className="text-xs text-zinc-500 mb-1">Live Output</p>
          <p className="text-lg font-semibold text-white min-h-[28px]">{name || <span className="text-zinc-600 italic font-normal">Waiting for input...</span>}</p>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
