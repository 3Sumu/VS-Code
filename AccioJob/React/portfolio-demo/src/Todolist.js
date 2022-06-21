import React from "react";
import Todo from "./Todo";

export default function Todolist({ todos, toogletodo }) {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} toogletodo={toogletodo} />;
      })}
    </div>
  );
}
