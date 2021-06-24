import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Nav from "../../components/navbar/nav";
import avatar from "../../components/images/img_avatar.png";
import "../../components/employee_card/style.css";

function Employee_edit(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const getData = () => {
    const id = props.match.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setName(res.data.name);
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const updateData = () => {
    let empl = {
      name: "",
      username: "",
    };

    axios
      .put(`https://jsonplaceholder.typicode.com/users`, empl)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <body>
      <div className="flex_cards main">
        {/* <div className="card" key={Employee.id}> */}
        <div className="card_img">
          <img
            className="card_emp"
            src={avatar}
            alt="logo img"
            height={150}
            width={250}
          />
        </div>
        {/* <h3>{Employee.name}</h3>
          <p className="text_card">Team : {Employee.username}</p> */}
        {/* <p className="text_card">KPI: {Employee.address.zipcode}</p> */}
        {/* </div> */}

        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
      </div>

      <button onClick={() => updateData}>update</button>
    </body>
  );
}

export default Employee_edit;
