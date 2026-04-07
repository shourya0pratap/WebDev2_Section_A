import React from "react";

const Child = ({ name, cb }) => {
  return (
    <>
      <h1>Rendered in Child: {name}</h1>
      <button onClick={cb}>Click Me</button>
    </>
  );
};

export default Child;
