import React from "react";
import "../Buttons/Button.css";

function Button(props) {
  return (
    <div
      className="Button"
      onClick={props.onClick}
      data-value={props.value}
      data-size={props.size}
    >
      {props.label}
    </div>
  );
}

export default Button;
