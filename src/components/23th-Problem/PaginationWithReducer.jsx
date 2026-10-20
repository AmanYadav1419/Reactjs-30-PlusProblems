// question :- Build a pagination component using useReducer to manage the current page and the number of items per page

import React, { useEffect, useReducer } from "react";

// item per page
const itemsPerPage = 5;

// reducer function
const paginationReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_TOTAL_ITEMS":
      return { ...state, totalItem: action.payload };

    default:
      return state;
  }
};

const PaginationWithReducer = () => {
  // data using for pagination create an array b using Array method
  const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);

  // console.log(data);

  // reducer hook
  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItem: 0,
  });

  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEMS", payload: data.length });
  }, [data]);

  // start page index logic
  const startIndex = (paginationState.currentPage - 1) * itemsPerPage;

  // end index logic
  const endIndex = startIndex + itemsPerPage;

  // slicing start and end so get the data to display
  const displayedItems = data.slice(startIndex, endIndex);

  // console.log(displayedItems)

  // page click btn fn for previous and next page
  const handlePageClick = (newPage) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: newPage });
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-md mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Reducer Pagination</h2>
          <span className="text-xs font-mono text-zinc-500">
            Page {paginationState.currentPage} / {Math.ceil(paginationState.totalItem / itemsPerPage)}
          </span>
        </div>

        <ul className="flex flex-col gap-2 min-h-[220px]">
          {displayedItems.map((item, index) => (
            <li key={index} className="px-4 py-3 bg-[#18181c] border border-white/5 rounded-xl text-sm text-zinc-300">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
          <button
            onClick={() => handlePageClick(paginationState.currentPage - 1)}
            disabled={paginationState.currentPage === 1}
            className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-[#18181c] border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white disabled:hover:bg-[#18181c] disabled:hover:text-zinc-400"
          >
            ← Previous
          </button>
          <button
            onClick={() => handlePageClick(paginationState.currentPage + 1)}
            disabled={endIndex >= data.length}
            className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600 text-white disabled:bg-[#18181c] disabled:border disabled:border-white/10 disabled:text-zinc-400"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationWithReducer;
