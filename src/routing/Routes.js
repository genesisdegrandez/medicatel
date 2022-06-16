import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Empresa, Login } from "../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Empresa" render={() => <Empresa />} />
      </Switch>
    </Router>
  );
};

export default Routes;
