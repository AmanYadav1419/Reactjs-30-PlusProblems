// question :- Create a differnet route pages component using useEffect to update the document title with the visited page whenever it changes.

import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";


const DifferentRoutePages = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-screen-md mx-auto">
      <div className="bg-white/5 border border-white/10 shadow-[inner_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] w-full flex flex-col overflow-hidden">

        {/* Mock Application Navbar */}
        <div className="flex items-center gap-6 px-8 py-4 bg-[#18181c] border-b border-white/5">
          <span className="font-bold text-white tracking-widest text-sm uppercase">AppFrame™</span>
          <div className="h-4 w-px bg-white/10"></div>
          <nav className="flex gap-6">
            <a href="#/problem/30" className="text-sm font-medium hover:text-white text-zinc-400 transition-colors">Home</a>
            <a href="#/problem/30/about" className="text-sm font-medium hover:text-white text-zinc-400 transition-colors">About</a>
            <a href="#/problem/30/contact" className="text-sm font-medium hover:text-white text-zinc-400 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Dynamic Route View */}
        <div className="p-8 min-h-[400px] flex items-center justify-center bg-black/20">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DifferentRoutePages;
