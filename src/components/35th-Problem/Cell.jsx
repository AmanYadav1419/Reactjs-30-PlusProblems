import React from "react";

const Cell = ({ filled, onClick, isDisabled }) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={`aspect-square w-full rounded-xl transition-all duration-300 border focus:outline-none ${filled
          ? "bg-blue-500 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-95"
          : "bg-[#18181c] border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
        }`}
    />
  );
};

export default Cell;
