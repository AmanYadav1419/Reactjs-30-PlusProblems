// this is only for 30th Problem route Purpose

import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return <div>Home</div>;
};

export default Home;
