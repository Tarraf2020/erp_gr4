import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Card_employee from "./pages/employee/employees";
import Employee from "./pages/employee/employee";
import Employee_edit from "./pages/employee/edit_employee";
import admins from "./pages/admins/admins";



import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Card_employee}></Route>
          <Route path="/employees" exact component={Card_employee}></Route>
          <Route path="/employees/:id" exact component={Employee}></Route>
          <Route path="/employees_edit/:id" exact component={Employee_edit}></Route>
          
          
          <Route path="/admins" exact component={admins}></Route>
          <Route path="/employees/:id" exact component={Employee}></Route>
          <Route path="/employees_edit/:id" exact component={Employee_edit}></Route>
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
