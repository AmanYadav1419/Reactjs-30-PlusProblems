// question :- Implement a responsive navgation menu with a hamburger icon.

import React, { useState } from "react";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Services", "Contact"];

  const handleNavigate = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        {/* Navbar Header */}
        <nav aria-label="Main Navigation" className="flex items-center justify-between px-6 py-4 bg-[#18181c] border-b border-white/5">
          <span className="font-bold text-white text-sm tracking-widest uppercase">NavMenu</span>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => handleNavigate(link)}
                  aria-current={activeLink === link ? "page" : undefined}
                  className={`text-sm px-3.5 py-1.5 rounded-lg transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    activeLink === link
                      ? "bg-white/10 text-white font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger button (mobile) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 gap-1.5"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile Drawer - hidden from assistive tech when closed */}
        <div
          id="mobile-navigation-drawer"
          aria-hidden={!isOpen}
          hidden={!isOpen}
          className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300`}
        >
          <ul className="flex flex-col px-6 py-4 gap-2 bg-[#0d0d12] border-b border-white/5">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => handleNavigate(link)}
                  aria-current={activeLink === link ? "page" : undefined}
                  className={`w-full text-left text-sm font-medium py-2.5 px-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    activeLink === link
                      ? "bg-white/10 text-white font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content View / Status Area */}
        <div className="p-8 bg-black/20 flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
            Active View
          </span>
          <h3 className="text-2xl font-bold text-white">{activeLink} Section</h3>
          <p className="text-xs text-zinc-400 max-w-sm">
            Navigated to {activeLink}. Select any navigation item above to switch views.
          </p>

          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/5 w-full justify-center">
            <span className="text-xs text-zinc-500 font-medium">Menu State:</span>
            <span
              className={`text-xs font-bold uppercase tracking-widest ${
                isOpen ? "text-blue-400" : "text-zinc-500"
              }`}
            >
              {isOpen ? "Open" : "Closed"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
