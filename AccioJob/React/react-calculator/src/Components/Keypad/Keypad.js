import React from "react";
import "../Keypad/Keypad.css";

function Keypad(props) {
  return <div className="Keypad">{props.children}</div>;
}

export default Keypad;
