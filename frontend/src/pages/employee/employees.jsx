import React from "react";

import Nav from "../../components/navbar/nav";
import Card_employee from "../../components/employee_card/card_employee";

function Employees() {
  return (
    <>
      <Nav />
      <div className="main">
        <div className="main_flex">
          <h1>Employees</h1>
          <input type="text" placeholder="Search.." />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <Card_employee />
      </div>
    </>
  );
}

export default Employees;
