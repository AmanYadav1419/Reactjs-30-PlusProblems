import React from "react";

import "./Grid.css";

const Cell = ({ filled, onClick, isDisabled }) => {
  return (
    <button
      type="button"
      // to prevent multiple time clicking on a same box button
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
};

export default Cell;
