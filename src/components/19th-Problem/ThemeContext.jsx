// this is context for 19th Problem

import { createContext, useState, useContext } from "react";

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


const useTheme = ()=> {
    return useContext(ThemeContext);
}

export {useTheme, ThemeProvider}