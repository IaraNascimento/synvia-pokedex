import { useEffect, useState } from "react";
import axios from 'axios';

function List() {
  const [pokemons, setPokemons] = useState("");

  useEffect(() => {
    const url = "https://unpkg.com/pokemons@1.1.0/pokemons.json";

    const loadPokemonData = async () => {
      try {
        const resp = await axios.get(url);
        setPokemons(resp.data.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    loadPokemonData();
  }, []);

  return (
    <ul>
      {pokemons.length && pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}
    </ul>
  );
}

export default List;
