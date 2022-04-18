import React, { useState } from "react";
import axios from "axios";

function Details(props) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/1`).then((res) => {
    console.log();
  });

  return (
    <div>
      <h1>Pokemon Details</h1>
    </div>
  );
}

export default Details;
