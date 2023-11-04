import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, setTypes } from '../../slices/pokemonList';
import { Title, List, Item } from './TypeList.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function TypeList() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.pokemonList.filters);
  const types = useSelector(state => state.pokemonList.types);
  const originalPokemonList = useSelector(state => state.pokemonList.list);

  function mapTypes(type, index) {
    const isTypeIncluded = filters.types.includes(type);
    return <Item
      key={index}
      selected={isTypeIncluded}
      onClick={() => toggleTypeFilter(type)}
    >
      {type}{isTypeIncluded && <span><FontAwesomeIcon icon={faCheck} /></span>}
    </Item>
  }

  function toggleTypeFilter(type) {
    const auxFilter = JSON.parse(JSON.stringify(filters));
    if (auxFilter.types.includes(type)) auxFilter.types = auxFilter.types.filter(filterType => filterType !== type);
    else auxFilter.types.push(type);
    dispatch(setFilters(auxFilter));
  }

  function filterUniqueTypes(pokemons) {
    let uniqueTypes = new Set();
    pokemons.forEach((pokemon) => {
      pokemon.type.forEach((type) => { uniqueTypes.add(type) })
    });

    uniqueTypes = Array.from(uniqueTypes).sort();
    return uniqueTypes;
  }

  useEffect(() => {
    dispatch(setTypes(filterUniqueTypes(originalPokemonList)));
  }, [originalPokemonList]);

  return (
    <>
      <Title>Filtrar por Tipo</Title>
      <List>
        {!!types.length && types.map(mapTypes)}
      </ List>
    </>
  );
}

export default TypeList;
