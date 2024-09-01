// problem / question :-
// Build a 3x3 grid of light cells (ometting the center cell) where you can click on the cells to activate them,
// turning them blue. When all the cells hae been activated they will be deactivated one by one in the reverse order they
// were activated with a 300ms interval in between.

import React, { useState } from "react";
import Cell from "./Cell";

import "./Grid.css";

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
    <div className="wrapper">
      <div
        className="grid-class"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {
          // basically to reomove the two dimensional array and convert them like => [1,1,1,1,0,] like this
          config.flat(1).map((value, index) => {
            // it accepts two props
            return value ? (
              <Cell
                key={index}
                filled={order.includes(index)}
                onClick={() => activateCells(index)}
                isDisabled={order.includes(index) || isDeactivating}
              />
            ) : (
              // if value is true then return cell otherwise return blank i.e span, basically for middle element
              <span />
            );
          })
        }
      </div>
    </div>
  );
};

export default GridLight;
