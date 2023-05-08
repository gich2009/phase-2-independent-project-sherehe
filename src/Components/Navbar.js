import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="./create" >
            Create Event
          </NavLink>
        </li>
        <li>
          <NavLink to="./myevents" >
            My Events
          </NavLink>
        </li>
        <li>
          <NavLink to="./about" >
            About
          </NavLink>
        </li>
        <li className="logout">
          <NavLink to="../" >
            Log out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;