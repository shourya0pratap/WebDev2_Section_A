import React, { useState } from "react";
import styles from "./count.module.css";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={styles.d}>Count: {count}</div>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
};

export default Count;
