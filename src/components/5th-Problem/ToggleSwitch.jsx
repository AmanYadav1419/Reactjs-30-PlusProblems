// quesiton :- Implement a basic toggle switch component

import React, { useState } from "react";

const ToggleSwitch = () => {
  const [istoggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!istoggle);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{istoggle ? "on" : "off"}</p>
    </div>
  );
};

export default ToggleSwitch;
