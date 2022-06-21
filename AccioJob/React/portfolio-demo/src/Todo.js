import React from "react";

export default function Todo({ todo, toogletodo }) {
  const style = {
    check: {
      width: "20px",
      height: "20px",
    },
    label: {
      padding: "10px",
    },
  };

  function handletogger() {
    toogletodo(todo.id);
  }

  return (
    <div>
      <label style={style.label}>
        <input
          style={style.check}
          type="checkbox"
          checked={todo.completed}
          onClick={handletogger}
        />
        {todo.name}
      </label>
    </div>
  );
}
