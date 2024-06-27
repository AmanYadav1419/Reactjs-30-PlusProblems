// this is only for 30th Problem route Purpose

import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return <div>About</div>;
};

export default About;
