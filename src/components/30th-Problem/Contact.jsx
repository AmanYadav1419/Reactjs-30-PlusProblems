// this is only for 30th Problem route Purpose

import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div className="text-center flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-white">Contact Page</h1>
      <p className="text-zinc-400 text-sm">Document title updates via <code className="font-mono text-blue-400">useEffect</code> whenever you navigate to this route.</p>
    </div>
  );
};

export default Contact;
