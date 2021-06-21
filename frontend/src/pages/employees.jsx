import React from "react";

import Nav from "../components/navbar/nav";
import Card_employee from "../components/employee_card/card_employee";

function Employees() {
  return (
    <>
      <Nav />
      <div className="main">
        <Card_employee />
      </div>
    </>
  );
}

export default Employees;
