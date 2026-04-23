import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bollywood from "./components/Bollywood";
import Fitness from "./components/Fitness";
import Food from "./components/Food";
import Hollywood from "./components/Hollywood";
import Technology from "./components/Technology";

const App = () => {
  return(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  </>);
};

export default App;
