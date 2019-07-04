import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import { Grid, Button, withStyles } from "@material-ui/core";
import TextInput from "../TextInput";

const styles = () => ({
  formContainer: {
    width: "400px"
  }
});

const required = value => (value ? undefined : "Required");

const LoginForm = ({ handleSubmit, submitting, pristine, classes }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" className={classes.formContainer}>
        <Field
          name="login"
          type="text"
          margin="dense"
          label="Login"
          validate={required}
          component={TextInput}
        />
        <Field
          name="password"
          type="password"
          margin="dense"
          label="Password"
          validate={required}
          component={TextInput}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={submitting || pristine}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};

LoginForm.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};

export default withStyles(styles)(LoginForm);
