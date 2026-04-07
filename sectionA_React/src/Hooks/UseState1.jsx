import React, { useState } from "react";
import styles from "./count.module.css";

const UseState1 = () => {
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);
  return (
    <>
      <div className={styles.d}>Count: {count}</div>
      <div className={styles.container}>
        <button className={styles.btn} onClick={() => setCount(count + delta)}>
          +{delta}
        </button>
        <button className={styles.btn} onClick={() => setDelta(delta + 1)}>
          +Delta (Current: {delta})
        </button>
        <button className={styles.btn} onClick={() => setCount(count - delta)}>
          -{delta}
        </button>
        <button className={styles.btn} onClick={() => setDelta(delta - 1)}>
          -Delta (Current: {delta})
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            setCount(0);
            setDelta(1);
          }}
        >
          Reset all
        </button>
      </div>
    </>
  );
};

export default UseState1;
