import { db } from "../../init";
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsError
} from "../actions";

const fetchSongs = () => {
  return dispatch => {
    dispatch(fetchSongsStart());

    return db
      .collection("songs")
      .get()
      .then(res => {
        if (res.empty) {
          throw new Error("No collection");
        }
        const data = res.docs.map(elem => ({
          id: elem.id,
          ...elem.data()
        }));
        dispatch(fetchSongsSuccess(data));
      })
      .catch(err => {
        dispatch(fetchSongsError(err));
      });
  };
};

export default fetchSongs;
