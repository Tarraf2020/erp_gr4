import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";


import avatar from "./images/img_avatar.png";
import "./style.css";

function Card_employee() {
  const [Employees, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res);
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex_cards">
      {Employees.map((employee) => {
        return (
          
          <div className="card" key={employee.id}>
          <Link to={`/employees/${employee.id}`}>
            <div className="card_img">
              <img
                className="card_emp"
                src={avatar}
                alt="logo img"
                height={150}
                width={250}
              />
            </div>
            <h3>{employee.name}</h3>
            <p className="text_card">Team : {employee.username}</p>
            <p className="text_card">KPI: {employee.address.zipcode}</p>

            {/* <button>Contact</button> */}
            <span class="see_more">Show more</span>
          </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Card_employee;