import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problem/:id/*" element={<ProblemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
