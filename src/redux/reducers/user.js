const user = (state = false, action) => {
  switch (action.type) {
    case "FETCH_USER_START": {
      return state;
    }
    case "FETCH_USER_SUCCESS": {
      return true;
    }
    case "FETCH_USER_ERROR": {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default user;
