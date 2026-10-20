import React, { useState } from "react";
import tabsData from "./tabsData";

const Tabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-2xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden w-full">

        {/* Tab Headers */}
        <div className="flex bg-[#18181c] border-b border-white/5 p-1 gap-1">
          {tabsData.map((item, index) => (
            <button
              key={item.label}
              onClick={() => setCurrentTabIndex(index)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${currentTabIndex === index
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8 min-h-[200px] flex items-center justify-center bg-[#0d0d12]">
          <div className="text-center">
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-3">{tabsData[currentTabIndex].label}</p>
            <p className="text-zinc-300 text-sm leading-relaxed">{tabsData[currentTabIndex].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
