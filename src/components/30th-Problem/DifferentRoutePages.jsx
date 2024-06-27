// question :- Create a differnet route pages component using useEffect to update the document title with the visited page whenever it changes.

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";


const DifferentRoutePages = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* more can be created similar like these  */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default DifferentRoutePages;
