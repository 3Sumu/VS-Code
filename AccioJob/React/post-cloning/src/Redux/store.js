import countReducer from "./Count/reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import postsReducer from "./Posts/reducer";
import reduxThunk from "redux-thunk";
import postReducer from "./Post/reducer";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  count: countReducer,
  posts: postsReducer,
  post: postReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, createLogger()))
);

export default store;
