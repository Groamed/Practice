const songs = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SONGS_START": {
      return [];
    }
    case "FETCH_SONGS_SUCCESS": {
      return [...action.data];
    }
    case "FETCH_SONGS_ERROR": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default songs;
