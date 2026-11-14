// this is context for 19th Problem

import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeWrapper = ({ children }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`w-full p-6 sm:p-10 rounded-2xl transition-colors duration-300 flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-[#0d0d12] text-white"
          : "bg-zinc-100 text-zinc-900 shadow-inner"
      }`}
    >
      {children}
    </div>
  );
};

export { useTheme, ThemeProvider, ThemeWrapper };
