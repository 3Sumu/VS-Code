import { useState } from "react";
import "./App.css";
import Button from "./Components/Buttons/Button";
import Display from "./Components/Display/Display";
import Keypad from "./Components/Keypad/Keypad";

const labels = [
  "C",
  "7",
  "4",
  "1",
  "0",
  "/",
  "8",
  "5",
  "2",
  ".",
  "*",
  "9",
  "6",
  "3",
  "Del",
  "-",
];

function App() {
  const [data, setData] = useState("");

  const Calculate = () => {
    try {
      const result = eval(data);
      setData(result);
    } catch (e) {
      setData("Error");
    }
  };

  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "C":
        setData("");
        break;
      case "Del":
        setData(data.slice(0, -1));
        break;
      case "equal":
        Calculate();
        break;
      default:
        setData(data + value);
    }
  };
  return (
    <div className="App">
      <Display data={data} />
      <Keypad>
        {labels.map((buttonData) => (
          <Button
            key={buttonData}
            value={buttonData}
            label={buttonData}
            onClick={handleClick}
          />
        ))}
        <Button onClick={handleClick} label="+" size="2" value="+" />
        <Button onClick={handleClick} label="=" size="2" value="equal" />
      </Keypad>
    </div>
  );
}

export default App;
