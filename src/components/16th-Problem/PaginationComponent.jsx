// question :- Develop a pagination component to navigate through a large list of items.

import React, { useState } from 'react'

const PaginationComponent = ({ listofNames, itemsPerPage }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const indexofLastItem = currentPage * itemsPerPage;
    const indexofFirstItem = indexofLastItem - itemsPerPage;
    const currentItems = listofNames.slice(indexofFirstItem, indexofLastItem)

    // console.log(currentItems)

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(listofNames.length / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-md mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full flex flex-col gap-6">
                <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Paginated List</h2>
                <ul className="flex flex-col gap-2 min-h-[220px]">
                    {currentItems.map((item, index) => (
                        <li key={index} className="px-4 py-3 bg-[#18181c] border border-white/5 rounded-xl text-sm text-zinc-300">
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Pagination Controls */}
                <div className="flex items-center justify-center flex-wrap gap-2 pt-4 border-t border-white/5">
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => setCurrentPage(number)}
                            className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${currentPage === number
                                    ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                                    : 'bg-[#18181c] border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PaginationComponent