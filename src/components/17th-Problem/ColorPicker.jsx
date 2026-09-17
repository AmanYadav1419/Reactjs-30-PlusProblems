// question :- Build a color picker that allows users to select a color.

import React, { useState } from 'react'

const ColorPicker = () => {

  const [selectedColor, setSelectedColor] = useState("#00000");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  }
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col items-center gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Color Picker</h2>

        <div
          className="w-full aspect-video rounded-xl shadow-inner border border-white/10 transition-colors duration-300"
          style={{ backgroundColor: selectedColor }}
        />

        <div className="flex items-center gap-4 w-full bg-[#18181c] p-3 rounded-xl border border-white/5">
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
            className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0 hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 font-medium">Selected Color</span>
            <span className="text-sm font-mono text-zinc-300 uppercase">{selectedColor}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker