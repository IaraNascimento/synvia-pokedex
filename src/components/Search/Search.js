import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Wrap, SearchInput, Icon } from './Search.style';
import { setFilters } from '../../slices/pokemonList';

function Search() {
  const filters = useSelector(state => state.pokemonList.filters);
  const dispatch = useDispatch();

  function handleTyping(event) {
    const value = event.target.value.toLowerCase().trim();
    dispatch(setFilters({ ...filters, search: value }));
  }

  return (
    <Wrap>
      <SearchInput placeholder="Pesquisar por nome ou número"
        onChange={handleTyping} />
      <Icon icon={faSearch} />
    </Wrap>
  );
}

export default Search;
