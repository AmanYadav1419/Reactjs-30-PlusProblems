// question :- Build a List component to display a list of items

import React from "react";

const ListComponent = () => {
  const ListItem = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase mb-6">Item List</h2>
        <ul className="flex flex-col gap-2">
          {ListItem.map((item, index) => (
            <li key={index} className="flex items-center gap-3 px-4 py-3 bg-[#18181c] border border-white/5 rounded-xl text-sm text-zinc-200">
              <span className="text-xs font-mono text-zinc-500 w-5 text-right">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListComponent;
