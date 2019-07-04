const auth = (state = { id: "", name: "", list: [] }, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { id: action.id, name: action.name, list: [...action.list] };
    }
    case "LOGOUT": {
      return { id: "", name: "", list: [] };
    }
    default: {
      return state;
    }
  }
};

export default auth;
