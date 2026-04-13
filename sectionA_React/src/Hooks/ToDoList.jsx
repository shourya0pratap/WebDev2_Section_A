import { useState } from "react";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, task]);
    setTask("");
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>

      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

