import { useEffect, useState } from "react";
import axios from 'axios';
import { ItemWrap, Item } from './List.style';
import Pokemon from "../Pokemon/Pokemon";

function List() {
  const [pokemons, setPokemons] = useState("");

  useEffect(() => {
    const url = "https://unpkg.com/pokemons@1.1.0/pokemons.json";

    const loadPokemonData = async () => {
      try {
        const resp = await axios.get(url);
        console.log(resp.data.results);
        setPokemons(resp.data.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    loadPokemonData();
  }, []);

  return (
    <ItemWrap>
      {pokemons.length && pokemons.map((pokemon, index) => <Item key={index}><Pokemon pokemon={pokemon} /></Item>)}
    </ItemWrap>
  );
}

export default List;
