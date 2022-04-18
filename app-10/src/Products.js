import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [pokemon, setPokemon] = useState([]);
  axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
    setPokemon(res.data.results);
  });

  let items = pokemon.map((poke, index) => {
    return (
      <Link key={index} to={`/details/${index}`}>
        <h3>{poke.name}</h3>
      </Link>
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
