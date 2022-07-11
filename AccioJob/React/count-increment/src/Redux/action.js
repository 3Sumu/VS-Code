export const incrementCounter = "INCREMENT";
export const decrementCounter = "DECREMENT";

export const increment = (countParam = 1) => {
  return {
    type: incrementCounter,
    payload: countParam,
  };
};

export const decrement = (countParam = 1) => {
  return {
    type: decrementCounter,
    payload: countParam,
  };
};
