import React, { useState } from "react";
import "../styles/main.scss";

export default function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { text: input, completed: false, urgent: isUrgent }]);
    setInput("");
    setIsUrgent(false);
  };

  const toggleCompleted = (index) => {
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
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <label className="urgent-checkbox">
          <input
            type="checkbox"
            checked={isUrgent}
            onChange={(e) => setIsUrgent(e.target.checked)}
          />
          Mark as Urgent
        </label>
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            className={`task ${task.completed ? "completed" : ""} ${
              task.urgent ? "urgent" : ""
            }`}
          >
            <label className="task-label">
              <input
                type="checkbox"
                className="circle-checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(i)}
              />
              <span className="task-text">{task.text}</span>
              {task.completed ? (
                <span className="completed-label">COMPLETED</span>
              ) : task.urgent ? (
                <span className="urgent-label">URGENT</span>
              ) : null}
            </label>
            <button className="delete" onClick={() => deleteTask(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}