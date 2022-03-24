import React, { useState } from "react";
import { incrementCounter, decrementCounter } from "../Redux/Count/action";
import { connect } from "react-redux";

function Count(props) {
  // const [countInput, setCountInput] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count</h1>
      <h1 style={{ fontSize: "20rem" }}>{props.count}</h1>
      {/* <input
        type="number"
        value={countInput}
        onChange={(e) => {
          setCountInput(Number(e.target.value));
        }}
      /> */}
      <button
        onClick={() => {
          props.incrementCounter();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.decrementCounter();
        }}
      >
        Decrement
      </button>{" "}
      <br /> <br />
      <button
        onClick={() => {
          props.incrementCounter(5);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.decrementCounter(5);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: (countInput) => dispatch(incrementCounter(countInput)),
    decrementCounter: (countInput) => dispatch(decrementCounter(countInput)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
