import React, { useState } from "react";

import tabsData from "./tabsData";

import "./tabs.css";

const Tabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__container">
        {tabsData.map((item, index) => {
          return (
            <button
              className={`${currentTabIndex === index ? "active" : ""}`}
              onClick={() => setCurrentTabIndex(index)}
              key={item.label}
            >
              {item.label}
            </button>
          );
        })}
        <div className="tabs__content">{tabsData[currentTabIndex].content}</div>
      </div>
    </div>
  );
};

export default Tabs;
