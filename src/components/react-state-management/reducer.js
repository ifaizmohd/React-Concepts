import Types from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case Types.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case Types.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
