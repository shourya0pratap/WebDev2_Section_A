import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </>
  );
};

export default Count;
