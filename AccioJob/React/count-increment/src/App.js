import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/action";

function App() {
  const state = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();

  return (
    <div className="App">
      hello
      <div>count: {state.counter}</div>
      <button onClick={() => dispatch(increment(5))}>Increment +</button>
      <button onClick={() => dispatch(decrement(10))}>Decrement -</button>
    </div>
  );
}

export default App;
