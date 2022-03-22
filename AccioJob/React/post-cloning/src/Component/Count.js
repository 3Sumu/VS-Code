import React from "react";
import { incrementCounter } from "../Redux/Count/action";
import { connect } from "react-redux";

function Count(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count</h1>
      <h1 style={{ fontSize: "20rem" }}>{props.count}</h1>
      <button onClick={props.incrementCounter}>Increment</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
