import React, { useState } from "react";

const Toggle = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <label for="formPass">Enter your password</label>
      <input id="formPass" type={showPass ? "text" : "password"} />
      <button
        onClick={() => {
          setShowPass(!showPass);
        }}
      >
        {showPass ? "Hide" : "Show"}
      </button>
    </>
  );
};

export default Toggle;
