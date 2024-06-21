// question :- Build a color picker that allows users to select a color.

import React, { useState } from 'react'

const ColorPicker = () => {

    const [selectedColor, setSelectedColor] = useState("#00000");

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    }
  return (
    <div>
        <input type='color' onChange={handleColorChange}/>

        <div style={{width:'150px', height:'100px', backgroundColor:selectedColor }}></div>
    </div>
  )
}

export default ColorPicker