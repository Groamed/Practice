import { db } from "../../init";
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserError,
  auth
} from "../actions";

const fetchUser = (name, password) => {
  return dispatch => {
    dispatch(fetchUserStart());

    return db
      .collection("users")
      .where("name", "==", name)
      .where("password", "==", password)
      .get()
      .then(res => {
        if (res.empty) {
          throw new Error("No such user");
        }
        const data = {
          id: res.docs[0].id,
          ...res.docs[0].data()
        };
        dispatch(auth(data.id, data.name, data.list));
        dispatch(fetchUserSuccess());
      })
      .catch(err => {
        dispatch(fetchUserError(err));
      });
  };
};

export default fetchUser;
