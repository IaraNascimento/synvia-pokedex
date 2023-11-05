import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../slices/pokemonList';
import FavoriteSwitch from './FavoriteSwitch';

const mockStore = configureStore([]);

describe('FavoriteSwitch component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      pokemonList: initialState
    });

    component = render(
      <Provider store={store}>
        <FavoriteSwitch />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should toggle store value when switch clicked', () => {
    const checkbox = component.getByRole('checkbox');
    fireEvent.click(checkbox);
    let actions = store.getActions();
    expect(actions[0].payload.isFavorite).toBeTruthy();
  });
});
