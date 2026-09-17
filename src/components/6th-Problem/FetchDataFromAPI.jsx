// question :- Create a Component that fetches data from an API and displays it.

import React, { useEffect, useState } from "react";

const FetchDataFromAPI = () => {
  const [apiData, setApiData] = useState([]);

  function fetchAPIdata() {
    try {
      // in that for a simple basic undestanding i use .then syntax
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((jsondata) => setApiData(jsondata));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAPIdata();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-lg mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase mb-6">API Response</h2>
        {apiData?.title ? (
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs text-zinc-500 mb-1">Title</p>
              <p className="text-base font-semibold text-white">{apiData.title}</p>
            </div>
            <div className="border-t border-white/5 pt-4">
              <p className="text-xs text-zinc-500 mb-1">Body</p>
              <p className="text-sm text-zinc-300 leading-relaxed">{apiData.body}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-zinc-500 text-sm">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            Loading data...
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchDataFromAPI;
