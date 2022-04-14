import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <h1>{userInput}</h1>
    </div>
  );
}

export default App;
