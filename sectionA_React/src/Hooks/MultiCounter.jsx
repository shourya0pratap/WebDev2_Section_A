import React, { useState } from "react";

export default function App() {
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
      {count.map((counter, index) => (
        <div key={index}>
          <h1>Count: {counter}</h1>
          <button
            onClick={() => {
              increment(index);
            }}
          >
            Click Me
          </button>
        </div>
      ))}
    </div>
  );
}

