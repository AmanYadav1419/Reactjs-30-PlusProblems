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
    <div>
      <h1>Pagination using useReducer</h1>

      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => handlePageClick(paginationState.currentPage - 1)}
          disabled={paginationState.currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageClick(paginationState.currentPage + 1)}
          disabled={endIndex >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationWithReducer;
