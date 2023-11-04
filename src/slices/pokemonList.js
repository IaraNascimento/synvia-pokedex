import { createSlice } from '@reduxjs/toolkit';

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState: {
    list: [],
    filters: { search: '', types: [], favorite: false },
  },
  reducers: {
    set: (state, action) => {
      state.list = action.payload
    },
    favorite: (state, action) => {
      const pokemonIndex = state.list.findIndex((pokemon) => pokemon.name === action.payload.name);
      state.list[pokemonIndex].isFavorite = !state.list[pokemonIndex].isFavorite;
    },
    setFilters: (state, action) => {
      state.filters = {
        search: action.payload.search,
        types: action.payload.types,
        favorite: action.payload.favorite,
      };
    },
  },
})

// Action creators are generated for each case reducer function
export const { set, favorite, setFilters } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;