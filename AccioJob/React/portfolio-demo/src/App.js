import { useState, useEffect } from "react";
import Todolist from "./Todolist";
import "./App.css";

const localstoragekey = "todolist.todo";

function App() {
  const loadedtodo = localStorage.getItem(localstoragekey)
    ? JSON.parse(localStorage.getItem(localstoragekey))
    : [];

  const [todos, setTodo] = useState(loadedtodo);
  const [data, setdata] = useState("");

  function addTodo(e) {
    if (data === "") return;
    setTodo((prev) => {
      return [
        ...prev,
        { id: new Date().getTime(), name: data, completed: false },
      ];
    });
    setdata("");
  }

  useEffect(() => {
    localStorage.setItem(localstoragekey, JSON.stringify(todos));
  }, [todos]);

  function toogleTodo(id) {
    const newtodo = [...todos];
    const todo = newtodo.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodo(newtodo);
  }

  function removeTodo() {
    const newTodo = todos;
    const remainTodo = newTodo.filter((todo) => !todo.completed);
    setTodo(remainTodo);
  }

  return (
    <div className="App">
      <Todolist todos={todos} toogletodo={toogleTodo} />
      <input
        value={data}
        onChange={(e) => {
          setdata(e.target.value);
        }}
        type="text"
      />
      <button style={{ margin: "0 15px 0 15px" }} onClick={addTodo}>
        Submit
      </button>
      <button onClick={removeTodo}>Clear Todo</button>
      <div>{todos.filter((todo) => !todo.completed).length} Todos Left</div>
    </div>
  );
}

export default App;
