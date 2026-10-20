import { useState } from "react";

export default function Accordion({ item }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${show ? 'border-blue-500/30 bg-blue-500/5' : 'border-white/5 bg-[#18181c]'}`}
    >
      <button
        onClick={() => setShow(!show)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className={`text-sm font-medium transition-colors ${show ? 'text-white' : 'text-zinc-300'}`}>
          {item.question}
        </span>
        <span className={`text-lg leading-none font-light transition-transform duration-300 text-zinc-400 ${show ? 'rotate-45' : 'rotate-0'}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${show ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
          {item.answer}
        </p>
      </div>
    </div>
  );
}
