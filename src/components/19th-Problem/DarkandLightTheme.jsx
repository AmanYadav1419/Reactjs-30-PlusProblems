// question :- build a context provider that allows users to swtich between light and dark themes, and use the context in different parts of the app to apply the selected theme

import React from 'react'
import { useTheme } from './ThemeContext'

const DarkandLightTheme = () => {
    const {isDarkMode, themeToggle} = useTheme();
  return (
    <div>
        <label>
            <input type="checkbox" checked={isDarkMode} onChange={themeToggle}/>
            {isDarkMode ? (<h3>DarkMode</h3>) : (<h3>LightMode</h3>)}
        </label>
    </div>
  )
}

export default DarkandLightTheme