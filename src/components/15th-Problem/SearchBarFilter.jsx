// question :- Build a search bar that filters a list of items based on user input.

import React, { useState } from "react";

const SearchBarFilter = ({ listofNames }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterItem = listofNames.filter((item) => (
    item.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase mb-1">Search List</h2>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search items..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#18181c] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all"
          />
          <svg className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>

        <ul className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {filterItem.length > 0 ? (
            filterItem.map((value, index) => (
              <li key={index} className="px-4 py-3 bg-[#18181c] border border-white/5 rounded-xl text-sm text-zinc-300">
                {value}
              </li>
            ))
          ) : (
            <li className="text-center text-zinc-600 text-sm py-4">No exact matches found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchBarFilter;
