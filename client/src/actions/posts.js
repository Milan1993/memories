import * as api from "../api";

// Action creator
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (currentId, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(currentId, post);

    dispatch({
      type: "UPDATE",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({
      type: "DELETE",
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({
      type: "LIKE",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
