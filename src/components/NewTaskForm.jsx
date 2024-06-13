import React, { useState } from "react";

function NewTaskForm({ addTask }) {
  const [newTask, setNewTask] = useState("");
  const [level, setLevel] = useState("");
  const [color, setColor] = useState("");

  function createTask(event) {
    event.preventDefault();
    const task = {
      task: newTask || "Untitled Task",
      level: level,
      color: color,
      completed: false,
    };
    addTask(task);
    setNewTask("");
    setLevel("");
    setColor("");
  }

  return (
    <div className="form">
      <form onSubmit={createTask}>
        <div className="newTask">
          <label htmlFor="newTask">What is it you want to do btw?</label>
          <textarea
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>

        <div className="urgency">
          🔥Urgent?🔥
          <input
            type="radio"
            id="low"
            name="urgency"
            value="low"
            checked={level === "low"}
            onChange={(e) => setLevel(e.target.value)}
          />
          <label htmlFor="low">ok...🔥</label>
          <input
            type="radio"
            id="medium"
            name="urgency"
            value="medium"
            checked={level === "medium"}
            onChange={(e) => setLevel(e.target.value)}
          />
          <label htmlFor="medium">Hmmmm!🔥🔥</label>
          <input
            type="radio"
            id="high"
            name="urgency"
            value="high"
            checked={level === "high"}
            onChange={(e) => setLevel(e.target.value)}
          />
          <label htmlFor="high">DAMN!🔥🔥🔥</label>
        </div>

        <div className="color">
          <label htmlFor="color">Color?</label>
          <input
            type="radio"
            id="orange"
            name="color"
            value="orange"
            checked={color === "coral"}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="orange">Orangish</label>
          <input
            type="radio"
            id="green"
            name="color"
            value="green"
            checked={color === "cadetblue"}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="green">Greenish</label>
          <input
            type="radio"
            id="blue"
            name="color"
            value="blue"
            checked={color === "blueviolet"}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="blue">Violetish</label>
        </div>
        <button>Create Task</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
