import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    userName: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Copy the existing state
      [name]: value, // Update only the specific field
    }));
  };
  return (
    <div>
      <input
        name="userName"
        type="text"
        placeholder="Enter name"
        value={formData.userName}
        onChange={(e) => setFormData(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Enter age"
        value={formData.age}
        onChange={(e) => setFormData(e.target.value)}
      />
      <h2>Hello, {formData.userName}</h2>
    </div>
  );
}
