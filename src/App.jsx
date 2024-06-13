import "./App.css";
import dataJSON from "./assets/Data.json";
import AboutPage from "./Page/AboutPage";
import DashboardPage from "./Page/DashboardPage";
import ExamplePage from "./Page/ExamplePage";
import ToDoListPage from "./Page/ToDoListPage";
import ItemDetailsPage from "./Page/ItemDetailsPage";
import NavbarPage from "./Page/NavbarPage";
import NotFoundPage from "./Page/NotFoundPage";
import HomePage from "./Page/HomePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [exampleTasks, setExampleTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setExampleTasks(
      dataJSON.map((task, index) => ({
        ...task,
        id: index,
        level: task.level || "low",
        color: task.color || "white",
        text: task.task || task.text || "Untitled Task",
        completed: task.completed || false,
      }))
    );
  }, []);

  function addTask(newTask) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        ...newTask,
        id: prevTasks.length,
        completed: newTask.completed ?? false,
      },
    ]);
    navigate("/to-do-list");
  }

  function deleteTaskFromToDoList(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function deleteExampleTaskFromToDoList(taskId) {
    setExampleTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== Number(taskId))
    );
  }

  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/example"
          element={
            <ExamplePage
              tasks={exampleTasks}
              setTasks={setExampleTasks}
              handleDelete={deleteExampleTaskFromToDoList}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/dashboard"
          element={<DashboardPage addTask={addTask} />}
        />
        <Route
          path="/item-details/:id"
          element={
            <ItemDetailsPage
              tasks={tasks}
              setTasks={setTasks}
              deleteTaskFromToDoList={deleteTaskFromToDoList}
            />
          }
        />
        <Route
          path="/to-do-list"
          element={<ToDoListPage tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
