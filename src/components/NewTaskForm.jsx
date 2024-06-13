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
          {/* <label htmlFor="newTask">What is it you want to do btw?</label> */}
          <textarea
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            name="bio"
            placeholder="Write your to do thing..."
            aria-label="Professional short bio"
          ></textarea>
        </div>

        <div className="urgency">
          <fieldset>
            <legend>🔥Urgent?🔥</legend>
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
          </fieldset>
        </div>

        <div className="color">
          <fieldset>
            <legend>Color?</legend>
            <label htmlFor="color">Color?</label>
            <input
              type="radio"
              id="orange"
              name="color"
              value="coral"
              checked={color === "coral"}
              onChange={(e) => setColor(e.target.value)}
            />
            <label htmlFor="coral">Orangish</label>
            <input
              type="radio"
              id="green"
              name="color"
              value="cadetblue"
              checked={color === "cadetblue"}
              onChange={(e) => setColor(e.target.value)}
            />
            <label htmlFor="cadetblue">Greenish</label>
            <input
              type="radio"
              id="blue"
              name="color"
              value="blueviolet"
              checked={color === "blueviolet"}
              onChange={(e) => setColor(e.target.value)}
            />
            <label htmlFor="blueviolet">Violetish</label>
          </fieldset>
        </div>
        <button>Create Task</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
