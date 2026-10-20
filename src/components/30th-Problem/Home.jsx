// this is only for 30th Problem route Purpose

import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="text-center flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-white">Home Page</h1>
      <p className="text-zinc-400 text-sm">Welcome to the home route. Navigate using the links above.</p>
    </div>
  );
};

export default Home;
