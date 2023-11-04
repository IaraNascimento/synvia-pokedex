import { configureStore } from '@reduxjs/toolkit'
import pokemonList from './slices/pokemonList';

export default configureStore({
  reducer: {
    pokemonList: pokemonList,
  },
});