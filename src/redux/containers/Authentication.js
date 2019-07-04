import { connect } from "react-redux";
import fetchUser from "../middlewares/fetchUser";
import Authentication from "../../components/Authentication";

const mapStateToProps = state => ({
  isUserLogged: state.user,
  user: state.auth
});

const mapDispatchToProps = dispatch => ({
  getUser: (name, password) => dispatch(fetchUser(name, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
