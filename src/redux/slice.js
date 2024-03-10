import { createSlice } from '@reduxjs/toolkit';


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const updateFavorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
      state.favorites = updateFavorites;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
