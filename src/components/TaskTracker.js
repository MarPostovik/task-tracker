import React, { useState } from "react";
import "../styles/main.scss";

export default function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <div className="input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i} className={`task ${task.completed ? "completed" : ""}`}>
            <span onClick={() => toggleTask(i)}>{task.text}</span>
            <button className="delete" onClick={() => deleteTask(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}