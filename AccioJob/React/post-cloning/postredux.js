const redux = require("redux");
const { createStore, combineReducers, applyMiddleware } = redux;

const reduxLogger = require("redux-logger");
const { createLogger } = reduxLogger;

/**************************************** */
const ADD_POST = "ADD_POST";
const INCREMENT_FOLLOWER = "INCREMENT_FOLLOWER";

const addPost = (postName) => {
  return { type: ADD_POST, payload: postName };
};

const incrementFollower = () => {
  return { type: INCREMENT_FOLLOWER };
};

/**************************************** */
const initialPost = {
  posts: [],
};

const postReducer = (state = initialPost, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};

const initialFollower = {
  follower: 0,
};

const followerReducer = (state = initialFollower, action) => {
  switch (action.type) {
    case INCREMENT_FOLLOWER:
      return {
        ...state,
        follower: state.follower + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  post: postReducer,
  follower: followerReducer,
});

/**************************************** */

// Store
const store = createStore(rootReducer, applyMiddleware(createLogger()));
const unsubscribe = store.subscribe(() => {});
console.log(store.getState());
store.dispatch(addPost("Thailand"));
console.log(store.getState());
store.dispatch(addPost("Argentina"));
store.dispatch(incrementFollower());
console.log(store.getState());
store.dispatch(incrementFollower());
console.log(store.getState());
unsubscribe();
