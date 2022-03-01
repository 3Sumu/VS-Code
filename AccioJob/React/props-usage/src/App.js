import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Hello from "./Components/Hello";
// import Hello1 from "./Components/Hello1";
// import HelloClass from "./Components/HelloClass";
// import CollegeStudent from './Components/CollegeStudent/CollegeStudent'
import ReactBootstrap from './Components/ReactBootstrap/ReactBootstrap'


// function App() {
//   return (
//     <div className="App">
//       <Hello greetTo="India" />
//       <Hello1 greetTo="USA" greetAlsoTo="Africa" />
//       <HelloClass />
//       <Hello1 greetAlsoTo="London" />
//       <Hello1 greetTo="England" greetAlsoTo="Korea" />
//     </div>
//   );
// }

class App extends Component {
  
  render() {
    return(
    <div className="App">
      <ReactBootstrap/>
      {/* <CollegeStudent/> */}
      {/* <CounterClass /> */}
      {/* <HelloClass /> */}
      {/* <HelloClass greetTo='Africa' />
    <HelloClass greetTo='Australia' /> */}
      {/* <Hello1 greetTo='Africa' />
    <Hello1 greetTo='America' greetAlsoTo='Australia' /> */}
    </div>
    )
  }
  
}

export default App;
