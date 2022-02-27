import "./App.css";
import Hello from "./Components/Hello";
import Hello1 from "./Components/Hello1";
import HelloClass from "./Components/HelloClass";

function App() {
  return (
    <div className="App">
      <Hello greetTo="India" />
      <Hello1 greetTo="USA" greetAlsoTo="Africa" />
      <HelloClass />
      <Hello1 greetAlsoTo="London" />
      <Hello1 greetTo="England" greetAlsoTo="Korea" />
    </div>
  );
}

export default App;
