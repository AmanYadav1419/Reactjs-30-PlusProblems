// question :- build a context provider that allows users to swtich between light and dark themes, and use the context in different parts of the app to apply the selected theme

import React from 'react'
import { useTheme } from './ThemeContext'

const DarkandLightTheme = () => {
  const { isDarkMode, themeToggle } = useTheme();
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col items-center gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Theme Toggle</h2>

        <button
          onClick={themeToggle}
          className={`relative w-20 h-11 rounded-full transition-colors duration-300 focus:outline-none ${isDarkMode ? 'bg-zinc-700' : 'bg-amber-400'}`}
          role="switch"
          aria-checked={isDarkMode}
        >
          <span className={`absolute top-1.5 left-1.5 w-8 h-8 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-base ${isDarkMode ? 'translate-x-9 bg-[#18181c]' : 'translate-x-0 bg-white'}`}>
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </button>

        <div className="text-center">
          <p className="text-xl font-bold text-white">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
          <p className="text-xs text-zinc-500 mt-1">Click to switch theme</p>
        </div>
      </div>
    </div>
  )
}

export default DarkandLightTheme
