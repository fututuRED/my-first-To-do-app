import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { GiCrossedBones } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";

function ItemDetailsPage({ tasks, setTasks, deleteTaskFromToDoList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskId = parseInt(id, 10);
  const task = tasks.find((task) => task.id === taskId);

  const handleDelete = () => {
    deleteTaskFromToDoList(task.id);
    navigate("/");
  };

  if (!task) {
    return <NotFoundPage />;
  }

  return (
    <div
      style={{
        backgroundColor: task.color,
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h2>Your task details</h2>
      <p>What is it you have to do... {task.text}</p>
      <p>🔥Urgency🔥 - {task.level}</p>
      <p>✅ or ❌ - {task.completed ? <FaCheck /> : <GiCrossedBones />}</p>
      <button className="del" onClick={handleDelete}>
        Delete Task
      </button>
    </div>
  );
}

export default ItemDetailsPage;
