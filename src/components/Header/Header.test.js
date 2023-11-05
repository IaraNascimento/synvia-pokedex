import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../slices/pokemonList';
import Header from './Header';

const mockStore = configureStore([]);

describe('Header component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      pokemonList: initialState
    });

    component = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

});
