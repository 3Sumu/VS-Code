import {
  FETCH_POST_INITIATED,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./action";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_INITIATED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
