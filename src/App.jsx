import "./App.css";
import dataJSON from "./assets/Data.json";
import AboutPage from "./Page/AboutPage";
import NavbarPage from "./Page/NavbarPage";
import NotFoundPage from "./Page/NotFoundPage";
import HomePage from "./Page/HomePage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(
      dataJSON.map((task, index) => ({
        ...task,
        id: index,
      }))
    );
  }, []);

  return (
    <>
      <NavbarPage />

      {/* <AboutPage />
      <List tasks={tasks} setTasks={setTasks} /> */}

      <Routes>
        <Route
          path="/"
          element={<HomePage tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
