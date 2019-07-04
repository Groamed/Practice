import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const MainPage = () => {
  return (
    <Grid container>
      <Link to="/login">LoginPage</Link>
    </Grid>
  );
};

export default MainPage;
