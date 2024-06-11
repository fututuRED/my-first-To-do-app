import React from "react";
import { IconContext } from "react-icons";
import { FcTodoList } from "react-icons/fc";
import { Link } from "react-router-dom";

function NavbarPage() {
  return (
    <>
      <navbar className="navbar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/not-found">Not Found Page</Link> */}
        </ul>

        <h1> ToDo ApP </h1>
        <label className="logo">
          <FcTodoList />
        </label>
      </navbar>
    </>
  );
}

export default NavbarPage;
