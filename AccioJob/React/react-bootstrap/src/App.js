import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactNavbar from "./ReactNavbar/ReactNavbar";
import ReactCards from "./ReactCards/ReactCards";

function App() {
  return (
    <div className="App">
      <ReactNavbar />
      <ReactCards />
    </div>
  );
}

export default App;
