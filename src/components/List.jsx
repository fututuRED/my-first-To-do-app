import React from "react";
import { IconContext } from "react-icons";
import { GiCrossedBones } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";

function List({ tasks, setTasks }) {
  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <ul className="list">
      {tasks.map((task) => (
        <li key={task.id} className="element">
          {task.task}
          {task.completed ? (
            <p className="space">
              <FaCheck />
            </p>
          ) : (
            <p className="space">
              <GiCrossedBones />
            </p>
          )}
          <button onClick={() => handleDeleteTask(task.id)} className="delete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default List;
