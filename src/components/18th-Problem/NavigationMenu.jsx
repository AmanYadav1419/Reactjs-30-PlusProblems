// question :- Implement a responsive navgation menu with a hamburger icon.

import React, { useState } from "react";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {/* Navbar Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#18181c] border-b border-white/5">
          <span className="font-bold text-white text-sm tracking-widest uppercase">NavMenu</span>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link} className="text-sm text-zinc-400 hover:text-white cursor-pointer transition-colors font-medium">{link}</li>
            ))}
          </ul>

          {/* Hamburger button (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
          <ul className="flex flex-col px-6 py-4 gap-4 bg-[#0d0d12]">
            {navLinks.map((link) => (
              <li key={link} className="text-sm font-medium text-zinc-300 hover:text-white cursor-pointer transition-colors py-1 border-b border-white/5 last:border-0">{link}</li>
            ))}
          </ul>
        </div>

        {/* Status info */}
        <div className="px-6 py-4 bg-black/20 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-medium">Menu state:</span>
          <span className={`text-xs font-bold uppercase tracking-widest ${isOpen ? 'text-blue-400' : 'text-zinc-500'}`}>{isOpen ? 'Open' : 'Closed'}</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
