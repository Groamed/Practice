import { db } from "../../init";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersError
} from "../actions";

const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersStart());

    return db
      .collection("users")
      .get()
      .then(res => {
        if (res.empty) {
          throw new Error("No collection");
        }
        const data = res.docs.map(elem => ({
          id: elem.id,
          ...elem.data()
        }));
        dispatch(fetchUsersSuccess(data));
      })
      .catch(err => {
        dispatch(fetchUsersError(err));
      });
  };
};

export default fetchUsers;
