import axios from "axios";

export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};

const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

export const fetchPost = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostRequest());
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch(fetchPostSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostFailure(error.message));
    }
  };
};
