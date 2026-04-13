import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={
        dark
          ? { backgroundColor: "#1a1a1a", color: "#fff" }
          : { backgroundColor: "#fff", color: "#1a1a1a" }
      }
    >
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}
