import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../slices/pokemonList';
import List, { cleanPokemonList, dynamicSort, filterPokemonList } from './List';

const mockStore = configureStore([]);

const pokemons = [
  {
    national_number: "001",
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
  },
  {
    national_number: "002",
    name: "Ivysaur",
    type: ["Grass", "Poison"],
  },
  {
    national_number: "003",
    name: "Venusaur",
    type: ["Grass", "Poison"],
  },
  {
    national_number: "004",
    name: "Charmander",
    type: ["Fire"],
  },
  {
    national_number: "005",
    name: "Charmeleon",
    type: ["Fire"],
  },
  {
    national_number: "006",
    name: "Charizard",
    type: ["Fire", "Dragon"],
  },
  {
    national_number: "007",
    name: "Squirtle",
    type: ["Water"],
  },
];


describe('List component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      pokemonList: initialState
    });

    component = render(
      <Provider store={store}>
        <List />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should sort object by given property in ascending order', () => {
    const input = [{ age: 30 }, { age: 20 }, { age: 40 }];
    const expected = [{ age: 20 }, { age: 30 }, { age: 40 }];
    expect(input.sort(dynamicSort('age'))).toEqual(expected);
  });

  it('should sort objects by a given property in descending order', () => {
    const input = [{ age: 30 }, { age: 20 }, { age: 40 }];
    const expected = [{ age: 40 }, { age: 30 }, { age: 20 }];
    expect(input.sort(dynamicSort('-age'))).toEqual(expected);
  });

  it('should decide if pokemon is visible or not in the search with given filters - same list', () => {
    expect(filterPokemonList(pokemons, initialState.filters, 'national_number')).toEqual(pokemons);
  });

  it('should decide if pokemon is visible or not in the search with given filters - order by name', () => {
    const result = filterPokemonList(pokemons, initialState.filters, 'name');
    expect(result).not.toEqual(pokemons);
    expect(result.lenght).toEqual(pokemons.lenght);
    const sorted = JSON.parse(JSON.stringify(pokemons)).sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
    expect(result).toEqual(sorted);
  });

  it('should decide if pokemon is visible or not in the search with given filters - only bulbasaur', () => {
    const filters = { ...initialState.filters, search: 'bulb' }
    const result = filterPokemonList(pokemons, filters, 'national_number');
    expect(result).toEqual([pokemons[0]]);
  });

  it('should decide if pokemon is visible or not in the search with given filters - only water', () => {
    const filters = { ...initialState.filters, types: ['Water'] }
    const result = filterPokemonList(pokemons, filters, 'national_number');
    expect(result).toEqual([pokemons[6]]);
  });

  it('should remove duplicated itens', () => {
    const list = [...pokemons, pokemons[0]];
    expect(list.length).toEqual(pokemons.length + 1);
    const result = cleanPokemonList(list);
    expect(result.length).toEqual(pokemons.length);
  });

});
