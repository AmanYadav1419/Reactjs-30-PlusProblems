// this is another component for trying and using context / theme

import React from "react";
import { useTheme } from "./ThemeContext";

const NineteenComp = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto mt-4">
      <div className={`border rounded-2xl p-6 w-full text-center transition-colors duration-500 ${isDarkMode ? 'bg-zinc-900 border-white/10' : 'bg-amber-50 border-amber-200'}`}>
        <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: isDarkMode ? '#71717a' : '#92400e' }}>Context Consumer Component</p>
        <p className="text-lg font-bold" style={{ color: isDarkMode ? '#ffffff' : '#1c1917' }}>
          Active theme: {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </p>
      </div>
    </div>
  );
};

export default NineteenComp;
