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
  const order = useSelector(state => state.pokemonList.sort);

  function dynamicSort(property) {
    let sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  function filterPokemonList(pokemons, filters) {
    const filteredPokemons = pokemons.filter((pokemon) => {
      const pokemonNameOrNationalNumberFound = pokemon.name.toLowerCase().includes(filters.search) || pokemon.national_number.includes(filters.search);
      const pokemonTypeFound = !!filters.types.length ? pokemon.type.some(pokemonType => filters.types.includes(pokemonType)) : true;
      const pokemonFavoriteFound = filters.isFavorite ? pokemon.isFavorite : true;

      return pokemonNameOrNationalNumberFound && pokemonTypeFound && pokemonFavoriteFound;
    });

    return filteredPokemons.sort(dynamicSort(order));
  }

  function cleanPokemonList(pokemons) {
    const filteredPokemons = [];
    pokemons.forEach(pokemon => {
      if (filteredPokemons.findIndex(x => x.name === pokemon.name) === -1) {
        filteredPokemons.push(pokemon);
      }
    });
    return filteredPokemons;
  }

  useEffect(() => {
    const url = "https://unpkg.com/pokemons@1.1.0/pokemons.json";

    const loadPokemonData = async () => {
      try {
        const resp = await axios.get(url);
        const filteredPokemons = cleanPokemonList(resp.data.results);
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
  }, [filters, originalPokemonList, order])

  return (
    <ItemWrap>
      {!!pokemons.length && pokemons.map((pokemon, index) => <Item key={index}><Pokemon pokemon={pokemon} /></Item>)}
    </ItemWrap>
  );
}

export default List;