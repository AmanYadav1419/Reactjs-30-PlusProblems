// question :- Implement a responsive navgation menu with a hamburger icon.

import React, { useState } from "react";
// import of css is remaining
import "./NavgationMenu.css";
const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="menu-icon" onClick={toggleMenu}>
        {/* use real ham burger menu icon this is only practise */}-
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
