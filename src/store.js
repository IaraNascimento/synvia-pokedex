import { configureStore } from '@reduxjs/toolkit'
import pokemonList from './slices/pokemonList';

const reducers = {
  pokemonList: pokemonList
};

export default configureStore({
  reducer: reducers
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: reducers,
    preloadedState
  })
}