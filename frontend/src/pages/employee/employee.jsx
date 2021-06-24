import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Nav from "../../components/navbar/nav";
import avatar from "../../components/images/img_avatar.png";
import "./emp.css";

function Employee({ match }) {
  const [Employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => {
        console.log(res);
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <body>
      <Nav />
      <div className="main disp_emp">
       <img
                 
                  src={avatar}
                  alt="img"
                  height={250}
                  width={250}
                />

                <h1>{Employee.name}</h1>
                <h1>{Employee.username}</h1>
                <h1>{Employee.email}</h1>
                <h1>{Employee.phone}</h1>

        <Link className="link" to={`/employees_edit/${Employee.id}`}>
          <button>edit</button>
        </Link>
      </div>
    </body>
  );
}

export default Employee;
