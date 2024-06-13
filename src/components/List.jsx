import React from "react";
import { IconContext } from "react-icons";
import { GiCrossedBones } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";

function List({ tasks, setTasks, onViewDetails }) {
  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function toggleTaskStatus(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <ul className="list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="element"
          style={{ backgroundColor: task.color }}
        >
          <p>{task.task}</p>
          {task.completed ? (
            <p className="space">
              <FaCheck onClick={() => toggleTaskStatus(task.id)} />
            </p>
          ) : (
            <p className="space">
              <GiCrossedBones onClick={() => toggleTaskStatus(task.id)} />
            </p>
          )}
          <button onClick={() => handleDeleteTask(task.id)} className="delete">
            Delete
          </button>
          <button onClick={() => onViewDetails(task.id)}>View Details</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
