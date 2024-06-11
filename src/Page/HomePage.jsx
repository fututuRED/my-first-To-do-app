import React from "react";
import List from "../components/List";
import { useState } from "react";

function HomePage({ tasks, setTasks }) {
  return (
    <>
      <div className="homepage">
        <h1>All of the TASKS</h1>
        <List tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default HomePage;
