import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { add, subtract } from "./components/math.js";
import Parent from "./propsPassing/Parent.jsx";
import Ternary from "./conceptComponents/Ternary.jsx";
import UseState1 from "./Hooks/UseState1.jsx";
import LightDark from "./Hooks/LightDark.jsx";
import MultiCounter from "./Hooks/MultiCounter.jsx";
import FormValidation from "./Hooks/FormValidation.jsx";
import LoginForm from "./Hooks/LoginForm.jsx";
import ToDoList from "./Hooks/ToDoList.jsx";
import Toggle from "./Hooks/Toggle.jsx";

const App = () => {
  return (
    <>
      {/* {add(33, 34)}
      {subtract(100, 33)}
      <Navbar />
      <h1>Hello World</h1>
      <UseState1 />
      <Parent />
      <Ternary />
      <MultiCounter />
      <LightDark />
      <FormValidation />
      <LoginForm />
      <ToDoList /> 
      <Toggle /> */}
      <FormValidation />
    </>
  );
};

export default App;
