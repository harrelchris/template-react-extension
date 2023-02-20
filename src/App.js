import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Navbar from "./components/Navbar";
import "./styles/App.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
