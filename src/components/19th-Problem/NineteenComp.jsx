// this is another component for trying and using context / theme

import React from "react";
import { useTheme } from "./ThemeContext";
import "./Nineteen.css";

const NineteenComp = () => {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <div className={`container ${themeClass}`}>
      <h2>This componenet uses selected Theme:- {isDarkMode ? (<p>DarkMode</p>) : (<p>LightMode</p>)}</h2>
    </div>
  );
};

export default NineteenComp;
