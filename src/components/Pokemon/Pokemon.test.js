import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../slices/pokemonList';
import Pokemon from './Pokemon';

const mockStore = configureStore([]);

const pokemon = {
  national_number: "001",
  name: "Bulbasaur",
  type: ["Grass", "Poison"],
};

describe('Pokemon component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      pokemonList: initialState
    });

    component = render(
      <Provider store={store}>
        <Pokemon pokemon={pokemon} />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should favorite pokemon when heart icon clicked', () => {
    const wrapIcon = component.getByTestId('wrap-icon');
    fireEvent.click(wrapIcon);
    let actions = store.getActions();
    expect(actions[0].type).toEqual('pokemonList/favorite');
    expect(actions[0].payload).toEqual(pokemon);
  });

});
