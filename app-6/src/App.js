import React, { useState } from "react";
import logo from "./logo.svg";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [toDo, setToDo] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    let array = [];
    array.push(...toDo, userInput);
    setToDo(array);
    
  };
  let list = toDo.map((item, index) => {
    return <Todo item={item} key={index} />;
  });

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>

      {list}
    </div>
  );
}

export default App;
