import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const themeStyles = {
    backgroundColor: dark ? "#1a1a1a" : "#ffffff",
    color: dark ? "#ffffff" : "#1a1a1a",
  };
  return (
    <div style={themeStyles}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default App;
