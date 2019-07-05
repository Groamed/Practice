export const fetchUsersStart = () => ({
  type: "FETCH_USERS_START"
});

export const fetchUsersSuccess = data => ({
  data,
  type: "FETCH_USERS_SUCCESS"
});

export const fetchUsersError = error => ({
  error,
  type: "FETCH_USERS_ERROR"
});

export const fetchUserStart = () => ({
  type: "FETCH_USER_START"
});

export const fetchUserSuccess = data => ({
  data,
  type: "FETCH_USER_SUCCESS"
});

export const fetchUserError = error => ({
  error,
  type: "FETCH_USER_ERROR"
});

export const auth = (id, name, list) => ({
  id,
  name,
  list,
  type: "LOGIN"
});

export const logout = () => ({
  type: "LOGOUT"
});

export const fetchSongsStart = () => ({
  type: "FETCH_SONGS_START"
});

export const fetchSongsSuccess = data => ({
  data,
  type: "FETCH_SONGS_SUCCESS"
});

export const fetchSongsError = error => ({
  error,
  type: "FETCH_SONGS_ERROR"
});

export const filter = name => ({
  name,
  type: "FILTER"
});
