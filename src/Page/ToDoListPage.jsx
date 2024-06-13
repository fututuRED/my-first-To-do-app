import React, { useState } from "react";
import List from "../components/List";
import ItemDetailsPage from "./ItemDetailsPage";
import { Link } from "react-router-dom";

function ToDoListPage({ tasks, setTasks }) {
  // const [currentView, setCurrentView] = useState("list");
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  function addTask(task) {
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTaskObj = { ...task, id: newId };
    setTasks([...tasks, newTaskObj]);
    setSelectedTaskId(newId);
    setCurrentView("details");
  }

  function deleteTaskFromToDoList(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setCurrentView("list");
  }

  // function handleViewDetails(taskId) {
  //   setSelectedTaskId(taskId);
  //   setCurrentView("details");
  // }

  return (
    <div>
      {/* {currentView === "list" && ( */}
      <>
        <h2>Your ToDo List</h2>
        <List
          tasks={tasks}
          setTasks={setTasks}
          // onViewDetails={handleViewDetails}
        />
        <Link to="/dashboard">Create New Task</Link>
      </>
      {/* )} */}
      {/* {currentView === "details" && selectedTaskId !== null && ( */}
      <ItemDetailsPage
        tasks={tasks}
        setTasks={setTasks}
        deleteTaskFromToDoList={deleteTaskFromToDoList}
        selectedTaskId={selectedTaskId}
      />
      {/* )} */}
    </div>
  );
}

export default ToDoListPage;
