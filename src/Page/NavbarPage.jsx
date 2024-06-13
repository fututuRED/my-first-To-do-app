import React from "react";
import { FcTodoList } from "react-icons/fc";
import { NavLink } from "react-router-dom";

function NavbarPage() {
  return (
    <nav className="navbar">
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/example">Example</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Create</NavLink>
        </li>

        <li>
          <NavLink to="/to-do-list">To-Do List</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <h1>ToDo App</h1>
      <label className="logo">
        <FcTodoList />
      </label>
    </nav>
  );
}

export default NavbarPage;
