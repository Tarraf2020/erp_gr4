import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Card_employee from "./pages/employees";
import Employee from "./pages/employee";

import "./App.css";

class App extends Component { 
  render() {
    return (
      <>
        <Switch>
          <Route path="/employees" exact component={Card_employee}></Route>
          <Route path="/employees/:id" exact component={Employee}></Route>
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
