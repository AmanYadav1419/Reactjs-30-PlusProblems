// display or print hello world 

import React from 'react'

const HelloWorld = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 w-full">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-4">Problem 01</p>
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-2">Hello World</h1>
        <p className="text-zinc-400 text-sm">Your first React component, rendered successfully.</p>
      </div>
    </div>
  )
}

export default HelloWorld