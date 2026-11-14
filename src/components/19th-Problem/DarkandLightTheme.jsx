// question :- build a context provider that allows users to swtich between light and dark themes, and use the context in different parts of the app to apply the selected theme

import React from "react";
import { useTheme } from "./ThemeContext";

const DarkandLightTheme = () => {
  const { isDarkMode, themeToggle } = useTheme();

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div
        className={`border rounded-2xl p-8 w-full flex flex-col items-center gap-6 transition-all duration-300 ${
          isDarkMode
            ? "bg-[#18181c] border-white/10 text-white shadow-xl"
            : "bg-white border-zinc-200 text-zinc-900 shadow-lg"
        }`}
      >
        <h2
          className={`font-semibold text-xs tracking-widest uppercase transition-colors ${
            isDarkMode ? "text-zinc-400" : "text-zinc-500"
          }`}
        >
          Theme Toggle
        </h2>

        <button
          type="button"
          onClick={themeToggle}
          role="switch"
          aria-checked={isDarkMode}
          aria-label="Toggle dark and light theme"
          className={`relative w-20 h-11 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
            isDarkMode
              ? "bg-zinc-700 focus-visible:ring-offset-[#18181c]"
              : "bg-amber-400 focus-visible:ring-offset-white"
          }`}
        >
          <span
            className={`absolute top-1.5 left-1.5 w-8 h-8 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-base ${
              isDarkMode
                ? "translate-x-9 bg-[#18181c]"
                : "translate-x-0 bg-white"
            }`}
          >
            <span aria-hidden="true">{isDarkMode ? "🌙" : "☀️"}</span>
          </span>
        </button>

        <div className="text-center">
          <p className="text-xl font-bold">
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </p>
          <p
            className={`text-xs mt-1 transition-colors ${
              isDarkMode ? "text-zinc-500" : "text-zinc-400"
            }`}
          >
            Click or press Space to switch theme
          </p>
        </div>
      </div>
    </div>
  );
};

export default DarkandLightTheme;
