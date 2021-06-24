import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo/logo.jpg";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul>
        <img src={logo} alt="logo img"  />
        <li>
          <Link to="/admins">Admins</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/employees">Teams</Link>
        </li>
        <li>
          <Link to="/employees">Projects</Link>
        </li>
        <li id="down">
          <Link to="/employees">911</Link>
        </li>
        <li>
          <Link to="/employees">Log Out</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
