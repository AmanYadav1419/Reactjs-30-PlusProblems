// this is another component for trying and using context / theme

import React from "react";
import { useTheme } from "./ThemeContext";

const NineteenComp = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto mt-2">
      <div
        className={`border rounded-2xl p-6 w-full text-center transition-all duration-300 ${
          isDarkMode
            ? "bg-[#18181c] border-white/10 text-white shadow-xl"
            : "bg-white border-zinc-200 text-zinc-900 shadow-md"
        }`}
      >
        <p
          className={`text-xs font-semibold uppercase tracking-widest mb-2 transition-colors ${
            isDarkMode ? "text-zinc-400" : "text-zinc-500"
          }`}
        >
          Context Consumer Component
        </p>
        <p className="text-lg font-bold">
          Active theme: {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </p>
        <p
          className={`text-xs mt-2 transition-colors ${
            isDarkMode ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          Updates automatically when theme context changes
        </p>
      </div>
    </div>
  );
};

export default NineteenComp;
