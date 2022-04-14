import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [food, setFood] = useState([
    "spaghetti",
    "ice cream",
    "sushi",
    "bologna",
    "cheese",
    "pizza",
  ]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  let foodList = food
    .filter((index) => {
      return index.includes(userInput);
    })
    .map((i) => {
      return <h2>{i}</h2>;
    });
  // const handleChange()

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <p>{foodList}</p>
    </div>
  );
}

export default App;
