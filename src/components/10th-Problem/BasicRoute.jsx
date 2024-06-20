// question :- Build a basic routing setup with React Router

import React from "react";
import FormInput from "../3rd-Problem/FormInput";
import TimerCountDown from "../7th-Problem/TimerCountDown";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const BasicRoute = () => {
  return (
    
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/form">FORMInput</Link>
          </li>
          <li>
            <Link to="/timer">TimerCountDown</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/form" element={<FormInput />} />
        <Route path="/timer" element={<TimerCountDown />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRoute;
