// question :- Build a basic routing setup with React Router

import React from "react";
import FormInput from "../3rd-Problem/FormInput";
import TimerCountDown from "../7th-Problem/TimerCountDown";
import { MemoryRouter, Link, Route, Routes } from "react-router-dom";

const BasicRoute = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-lg mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase mb-2">Internal Router Protocol</h2>

        <nav className="flex justify-center border-b border-white/5 pb-6">
          <ul className="flex gap-4 p-1 bg-[#18181c] rounded-xl border border-white/5">
            <li>
              <Link to="form" className="block px-6 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors text-zinc-400 text-sm font-medium">Form Input</Link>
            </li>
            <li>
              <Link to="timer" className="block px-6 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors text-zinc-400 text-sm font-medium">Timer Component</Link>
            </li>
          </ul>
        </nav>

        <div className="pt-4 min-h-[300px] flex items-center justify-center">
          <Routes>
            <Route path="form" element={<FormInput />} />
            <Route path="timer" element={<TimerCountDown />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default BasicRoute;
