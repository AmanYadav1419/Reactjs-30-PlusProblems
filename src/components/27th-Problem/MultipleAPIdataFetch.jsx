import axios from "axios";
import React, { useEffect, useState } from "react";

const MultipleAPIdataFetch = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full max-w-4xl mx-auto">
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-zinc-400 font-medium text-sm tracking-widest uppercase text-center mb-2">Parallel API Requests</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {data1 ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
              <span className="text-xs font-mono text-zinc-500 uppercase">Endpoint 1</span>
              <h3 className="text-lg font-semibold text-white leading-tight">{data1.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{data1.body}</p>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-48 animate-pulse flex items-center justify-center">
              <span className="text-xs text-zinc-600 font-medium">Fetching Data 1...</span>
            </div>
          )}

          {data2 ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
              <span className="text-xs font-mono text-zinc-500 uppercase">Endpoint 2</span>
              <h3 className="text-lg font-semibold text-white leading-tight">{data2.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{data2.body}</p>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-48 animate-pulse flex items-center justify-center">
              <span className="text-xs text-zinc-600 font-medium">Fetching Data 2...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultipleAPIdataFetch;
