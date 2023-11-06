import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../slices/pokemonList';
import Search from './Search';

const mockStore = configureStore([]);

describe('Search component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      pokemonList: initialState
    });

    component = render(
      <Provider store={store}>
        <Search />
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
    const newValue = 'bla';
    const searchInput = component.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: newValue } });
    let actions = store.getActions();
    expect(actions[0].type).toEqual('pokemonList/setFilters');
    expect(actions[0].payload).toEqual({ ...initialState.filters, search: newValue });
  });

});
