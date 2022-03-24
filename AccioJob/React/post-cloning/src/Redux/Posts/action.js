import axios from "axios";

export const FETCH_POST_INITIATED = "FETCH_POST_INITIATED";
export const FETCH_POST_SUCCESS = "FETCH_POST_sUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

export const fetchPostInitiated = () => {
  return {
    type: FETCH_POST_INITIATED,
  };
};

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostInitiated());
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(fetchPostSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostFailure(error.message));
    }
  };
};
export default fetchPosts;
