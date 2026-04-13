import React, { useState } from "react";

export default function () {
  const [count, setCount] = useState([0, 0]);

  const increment = (index) => {
    setCount((prev) => {
      const newCount = [...prev];
      newCount[index] += 1;
      return newCount;
    });
  };
  return (
    <div>
      {count.map((c, key) => {
        <div key={key}>
          <h1>Count: {c}</h1>
          <button onClick={increment(key)}>Click Me</button>
        </div>;
      })}
    </div>
  );
}
