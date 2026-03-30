import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { add, subtract } from "./components/math.js";

const App = () => {
  return (
    <>
      {add(33, 34)}
      {subtract(100, 33)}
      <Navbar />
      <h1>Hello World</h1>
    </>
  );
};

export default App;
