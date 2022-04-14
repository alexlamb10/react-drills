import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import testingLibraryJestDom from '@testing-library/jest-dom'

function App() {
  const [food, setFood] = useState([
    "Bacon",
    "Bread",
    "Lettuce",
    "Tomato",
    "Mayo",
  ]);
  
  const foodList = food.map((ingredient) => {
    return <p>{ingredient}</p>
  })


  return (
  <div className="App">
    <h1>Food List</h1>
    {foodList}
  </div>
);}

export default App;
