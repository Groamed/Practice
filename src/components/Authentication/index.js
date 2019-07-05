import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Form } from "react-final-form";
import LoginForm from "../LoginForm";

class Authentication extends Component {
  setUser = values => this.props.getUser(values.login, values.password);

  componentDidUpdate() {
    const { isUserLogged, user } = this.props;

    if (isUserLogged) {
      localStorage.setItem(
        "user",
        JSON.stringify({ id: user.id, name: user.name, list: user.list })
      );
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.setUser}
        render={props => <LoginForm {...props} />}
      />
    );
  }
}
Authentication.propTypes = {
  authUser: PropTypes.func,
  classes: PropTypes.object,
  getUser: PropTypes.func,
  history: PropTypes.object,
  isUserLogged: PropTypes.bool,
  user: PropTypes.object
};
export default withRouter(Authentication);
