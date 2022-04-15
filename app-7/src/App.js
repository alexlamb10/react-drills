import React, { useState } from "react";
import logo from "./logo.svg";
import List from "./components/List";
import NewTask from "./components/NewTask";

import "./App.css";

function App() {

  const [userInput, setUserInput] = useState('')
  const [list, setList] = useState([])

  return (
    <div className="App">
      <NewTask
        setList={setList}
        setUserInput={setUserInput}
        list={list}
        userInput={userInput}
      />
      <List list={list}/>
    </div>
  );
}

export default App;
