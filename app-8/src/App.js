import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [info, setInfo] = useState([]);

  axios.get("https://pokeapi.co/api/v2/pokemon/35/").then((res) => {
    setInfo(res.data);
  });

  return (
    <div className="App">
      <h1>{info.name}</h1>
      <h3>Height: {info.height}</h3>
      <h3>Weight: {info.weight}</h3>
    </div>
  );
}

export default App;
