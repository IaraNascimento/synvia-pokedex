import { createSlice } from '@reduxjs/toolkit';

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState: {
    list: [],
  },
  reducers: {
    set: (state, action) => {
      state.list = action.payload
    },
    favorite: (state, action) => {
      const pokemonIndex = state.list.findIndex((pokemon) => pokemon.name === action.payload.name);
      state.list[pokemonIndex].isFavorite = !state.list[pokemonIndex].isFavorite;
    },
  },
})

// Action creators are generated for each case reducer function
export const { set, favorite } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;