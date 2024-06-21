// question :- Develop a pagination component to navigate through a large list of items.

import React, { useState } from 'react'

const PaginationComponent = ({listofNames,itemsPerPage}) => {

const [currentPage, setCurrentPage] = useState(1);
const indexofLastItem = currentPage * itemsPerPage;
const indexofFirstItem = indexofLastItem - itemsPerPage;
const currentItems = listofNames.slice(indexofFirstItem,indexofLastItem)

// console.log(currentItems)

const pageNumbers = [];
for(let i = 1; i<=Math.ceil(listofNames.length / itemsPerPage); i++){
    pageNumbers.push(i)
} 

  return (
    <div>
        <ul>
            <h3>Pagination</h3>
            {currentItems.map((item,index)=> (
                <li key={index}>{item}</li>
            ))}
        </ul>
        {
            pageNumbers.map((number)=> (
                <li key={number} onClick={()=> setCurrentPage(number)}>
                    {number}
                </li>
            ))
        }
    </div>
  )
}

export default PaginationComponent