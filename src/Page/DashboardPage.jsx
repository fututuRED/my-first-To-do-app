import { useState } from "react";
import React from "react";
import NewTaskForm from "../components/NewTaskForm";
import { Link } from "react-router-dom";

function DashboardPage({ addTask }) {
  return (
    <>
      <div>
        <h2>Create a New to-do thing</h2>
        <NewTaskForm addTask={addTask} />
      </div>
    </>
  );
}

export default DashboardPage;
