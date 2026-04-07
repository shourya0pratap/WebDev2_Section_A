import React from "react";
import Child from "./Child";

const Parent = () => {
  const fullName = "Shourya Pratap";
  function alert() {
    window.alert("Button Clicked");
  }
  return (
    <>
      <h1>Rendered in Parent: {fullName}</h1>
      <Child name={fullName} cb={alert} />
    </>
  );
};

export default Parent;
