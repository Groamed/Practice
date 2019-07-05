import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./Menu";
import MainPage from "./MainPage";

function AppRouter() {
  return (
    <Router>
      <React.Fragment>
        <Menu />
        <Route exact path="/" component={MainPage} />
      </React.Fragment>
    </Router>
  );
}

export default AppRouter;
