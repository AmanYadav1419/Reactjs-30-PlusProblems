// this is only for 30th Problem route Purpose

import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="text-center flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-white">About Page</h1>
      <p className="text-zinc-400 text-sm">This page demonstrates <code className="font-mono text-blue-400">useEffect</code> for updating the document title on route change.</p>
    </div>
  );
};

export default About;
