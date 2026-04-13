import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { add, subtract } from "./components/math.js";
import Parent from "./propsPassing/Parent.jsx";
import Ternary from "./conceptComponents/Ternary.jsx";
import UseState1 from "./Hooks/UseState1.jsx";
import LightDark from "./Hooks/LightDark.jsx"

const App = () => {
  return (
    <>
      {/* {add(33, 34)}
      {subtract(100, 33)} */}
      {/* <Navbar />
      <h1>Hello World</h1> */}
      {/* <UseState1 />
      <Parent />
      <Ternary /> */}
      <LightDark />
    </>
  );
};

export default App;
