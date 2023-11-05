import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  list: [],
  filters: { search: '', types: [], isFavorite: false },
  types: [],
  sort: 'national_number',
};

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    set: (state, action) => {
      state.list = action.payload;
    },
    favorite: (state, action) => {
      const pokemonIndex = state.list.findIndex((pokemon) => pokemon.name === action.payload.name);
      state.list[pokemonIndex].isFavorite = !state.list[pokemonIndex].isFavorite;
    },
    setFilters: (state, action) => {
      state.filters = {
        search: action.payload.search,
        types: action.payload.types,
        isFavorite: action.payload.isFavorite,
      };
    },
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { set, favorite, setFilters, setTypes, setSort } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;