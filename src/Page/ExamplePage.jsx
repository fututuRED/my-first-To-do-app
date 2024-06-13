import React from "react";

function ExamplePage({ tasks, setTasks }) {
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div>
      <h1 className="mytodo">Look at my to-do list!</h1>
      <ul>
        {tasks.map((task) => (
          <li
            className="myli"
            key={task.id}
            style={{
              backgroundColor: task.color,
            }}
          >
            <h3>{task.text}</h3>
            <p>🔥Urgency🔥 - {task.level}</p>
            <p>✅ or ❌ - {task.completed.toString()}</p>
            <button className="del" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExamplePage;
