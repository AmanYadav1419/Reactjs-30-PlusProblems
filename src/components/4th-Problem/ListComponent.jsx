// question :- Build a List component to display a list of items

import React from "react";

const ListComponent = () => {
  const ListItem = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div>
      {ListItem.map((item, index) => (
        <ul>
          <li key={index}>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default ListComponent;
