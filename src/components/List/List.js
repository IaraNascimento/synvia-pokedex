import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../slices/pokemonList';
import axios from 'axios';
import { ItemWrap, Item } from './List.style';
import Pokemon from "../Pokemon/Pokemon";

function List() {
  const dispatch = useDispatch();
  const newPokemonList = useSelector(state => state.pokemonList.list);

  useEffect(() => {
    const url = "https://unpkg.com/pokemons@1.1.0/pokemons.json";

    const loadPokemonData = async () => {
      try {
        const resp = await axios.get(url);
        const filteredPokemons = resp.data.results;
        dispatch(set(filteredPokemons));
        console.log(newPokemonList);
      } catch (error) {
        console.log("error", error);
      }
    };

    loadPokemonData();
  }, []);

  return (
    <ItemWrap>
      {newPokemonList.length && newPokemonList.map((pokemon, index) => <Item key={index}><Pokemon pokemon={pokemon} /></Item>)}
    </ItemWrap>
  );
}

export default List;