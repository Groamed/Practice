import { combineReducers } from "redux";
import users from "./users";
import songs from "./songs";
import user from "./user";
import auth from "./auth";
import filter from "./filter";

const reducers = combineReducers({ auth, user, users, songs, filter });

export default reducers;
