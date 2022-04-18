import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details(props) {
  const [pokeName, setPokeName] = useState("");
  const [pokePic, setPokePic] = useState("");
  const [pokeType, setPokeType] = useState("");
  const [pokeHeight, setPokeHeight] = useState("");
  const [pokeWeight, setPokeWeight] = useState("");
  const { id } = useParams();
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
    setPokeName(res.data.name);
    setPokePic(res.data.sprites.back_default);
    setPokeType(res.data.types[0].type.name);
    setPokeWeight(res.data.weight);
    setPokeHeight(res.data.height);
  });

  return (
    <div>
      <h1>{pokeName}</h1>
      <img width="200" src={pokePic} alt={pokeName} />
      <p>Type: {pokeType}</p>
      <p>
        Height: {pokeHeight}, Weight: {pokeWeight}
      </p>
    </div>
  );
}

export default Details;
