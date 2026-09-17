// problem / question :-
// Build a 3x3 grid of light cells (ometting the center cell) where you can click on the cells to activate them,
// turning them blue. When all the cells hae been activated they will be deactivated one by one in the reverse order they
// were activated with a 300ms interval in between.

import React, { useState } from "react";
import Cell from "./Cell";

const GridLight = () => {
  // create a state to maintain the order , to remove them in reverse order.
  const [order, setOrder] = useState([]);

  // deactivation state checker
  const [isDeactivating, setIsDeactivating] = useState(false);

  // we are creating a matrix to create a block UI, that is scalable also.
  // 1 for block present , 0 for block is absent.
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    // first set to true
    setIsDeactivating(true);

    // now running the deactivation in interval of 300ms
    // we can display them one by one until the order array gets empty

    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();

        // if its empty then
        if (newOrder.length === 0) {
          // then clear the interval of timer
          clearInterval(timer);
          // and deactivation to false
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    // push all the order to newOrder
    const newOrder = [...order, index];
    setOrder(newOrder);

    // now we have to track the order i.e sequence for deactivation
    // filter Boolean is for it gona remove the falsy values inside from array.
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      // called another function name deactivateCells
      deactivateCells();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="bg-white/5 border border-white/10 shadow-[inner_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-8 w-full flex flex-col items-center gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase">Grid Light</h2>
        <div
          className="grid gap-3 w-full max-w-[280px]"
          style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
        >
          {
            config.flat(1).map((value, index) => {
              return value ? (
                <Cell
                  key={index}
                  filled={order.includes(index)}
                  onClick={() => activateCells(index)}
                  isDisabled={order.includes(index) || isDeactivating}
                />
              ) : (
                <div key={index} className="opacity-0 pointer-events-none" />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default GridLight;
