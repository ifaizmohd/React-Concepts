import Types from "./types";

export const setUsers = (users) => ({
  type: Types.SET_USERS,
  payload: users,
});

export const setPosts = (posts) => ({
  type: Types.SET_POSTS,
  payload: posts,
});
