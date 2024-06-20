// question :- Build a search bar that filters a list of items based on user input.

import React, { useState } from "react";

const SearchBarFilter = ({ listofNames }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterItem = listofNames.filter((item) => (
    item.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
{/* 
      <ul>
        {
          listofNames.map((item,index)=> (
            <li key={index}>
              <p>Non - filter</p>
              {item}
            </li>
          ))
        }
      </ul> */}

      <ul>
        {filterItem.map((value, index) => (
          <li key={index}>
            {/* <h1>Filter Item </h1> */}
            {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBarFilter;
