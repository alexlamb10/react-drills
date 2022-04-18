import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products(index) {
  const [pokemon, setPokemon] = useState([]);
  axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
    setPokemon(res.data.results);
  });

  let items = pokemon.map((poke, index) => {
    index = index+1
    return (
      <div>
        <Link 
        key={index}
        to={{pathname: `/details/${index}`}}>
          <h3>{poke.name}</h3>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h1>Pokemon</h1>
      {items}
    </div>
  );
}

export default Products;
