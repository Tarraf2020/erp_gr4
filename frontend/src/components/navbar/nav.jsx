import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo/logo.jpg";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul>
        <img src={logo} alt="logo img" height={150} width={250} />
        <li>
            <i className="fas fa-address-card icon"></i>
            <Link to="/employees">Admins</Link>
        </li>
        <li>
            <i className="fas fa-home icon"></i>
            <Link to="/employees">Employees</Link>
        </li>
        <li>
            <i className="fas fa-home icon"></i>
            <Link to="/employees">Teams</Link>
        </li>
        <li>
            <i className="fas fa-home icon"></i>
            <Link to="/employees">Projects</Link>
        </li>
        <li>
            <i className="fas fa-lock icon  "></i>
            <Link to="/employees">911</Link>
        </li>
        <li>
            <i className="fas fa-lock icon  "></i>
            <Link to="/employees">Log Out</Link>
        </li>
      </ul>
       
    </div>

  );
}

export default Nav;
