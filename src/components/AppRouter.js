import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./Menu";
import MainPage from "./MainPage";
import Authentication from "../redux/containers/Authentication";

function AppRouter() {
  return (
    <Router>
      <React.Fragment>
        <Menu />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Authentication} />
      </React.Fragment>
    </Router>
  );
}

export default AppRouter;
