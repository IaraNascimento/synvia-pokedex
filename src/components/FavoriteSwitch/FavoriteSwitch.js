import { useDispatch, useSelector } from 'react-redux';
import { Input, Switch, Slider, Title } from './FavoriteSwitch.styles';
import { setFilters } from '../../slices/pokemonList';

function FavoriteSwitch() {
  const filters = useSelector(state => state.pokemonList.filters);
  const dispatch = useDispatch();

  function handleToggle() {
    const newFilters = JSON.parse(JSON.stringify(filters));
    newFilters.isFavorite = !newFilters.isFavorite;
    dispatch(setFilters(newFilters));
  }

  return (
    <>
      <Title>Filtrar Favoritos</Title>
      <Switch >
        <Input
          onChange={handleToggle}
          type="checkbox"
          checked={filters.isFavorite}
          value={filters.isFavorite}
        />
        <Slider></Slider>
      </Switch>
    </>
  );
};

export default FavoriteSwitch;
