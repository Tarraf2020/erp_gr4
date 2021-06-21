import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../components/navbar/nav";
import avatar from "../components/employee_card/images/img_avatar.png";
import "../components/employee_card/style.css";

function Employee({ match }) {
  const [Employee, setEmployee] = useState([]);
  useEffect(() => {
      console.log(match);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => {
        console.log(res);
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, {});
  return (
   
    <>
      <Nav />
      <div className="flex_cards main">
        <div className="card" key={Employee.id}>
          <div className="card_img">
            <img
              className="card_emp"
              src={avatar}
              alt="logo img"
              height={150}
              width={250}
            />
          </div>
          <h3>{Employee.name}</h3>
          <p className="text_card">Team : {Employee.username}</p>
          {/* <p className="text_card">KPI: {Employee.address.zipcode}</p> */}

          <span class="see_more">Show more</span>
        </div>
      </div>
    </>
  );
}

export default Employee;
