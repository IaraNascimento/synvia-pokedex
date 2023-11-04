import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../slices/pokemonList';
import axios from 'axios';
import { ItemWrap, Item } from './List.style';
import Pokemon from "../Pokemon/Pokemon";

function List() {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const originalPokemonList = useSelector(state => state.pokemonList.list);
  const filters = useSelector(state => state.pokemonList.filters);

  const filterPokemonList = (pokemons, filters) => {
    return pokemons.filter((pokemon) => {
      return (pokemon.name.toLowerCase().includes(filters.search) || pokemon.national_number.includes(filters.search))
    })
  }

  useEffect(() => {
    const url = "https://unpkg.com/pokemons@1.1.0/pokemons.json";

    const loadPokemonData = async () => {
      try {
        const resp = await axios.get(url);
        const filteredPokemons = resp.data.results;
        dispatch(set(filteredPokemons));
        setPokemons(filteredPokemons);
      } catch (error) {
        console.log("error", error);
      }
    };

    loadPokemonData();
  }, []);

  useEffect(() => {
    setPokemons(filterPokemonList(originalPokemonList, filters));
  }, [filters])

  return (
    <ItemWrap>
      {pokemons.length && pokemons.map((pokemon, index) => <Item key={index}><Pokemon pokemon={pokemon} /></Item>)}
    </ItemWrap>
  );
}

export default List;