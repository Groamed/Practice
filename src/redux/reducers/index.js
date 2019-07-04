import { combineReducers } from "redux";
import users from "./users";
import songs from "./songs";
import user from "./user";
import auth from "./auth";

const reducers = combineReducers({ auth, user, users, songs });

export default reducers;
