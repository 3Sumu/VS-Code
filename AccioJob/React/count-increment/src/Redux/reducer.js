import { incrementCounter, decrementCounter } from "./action";

const count = {
  counter: 0,
};

const counterReducer = (state = count, action) => {
  switch (action.type) {
    case incrementCounter:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case decrementCounter:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
