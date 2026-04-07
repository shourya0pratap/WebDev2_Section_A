import React from "react";

const Ternary = () => {
  const isLoggedIn = false;
  return (
    <>
      <div>Ternary</div>
      <h2>{isLoggedIn ? "Welcome User" : "Please Log In"}</h2>
    </>
  );
};

export default Ternary;
