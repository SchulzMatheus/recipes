import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  recipes: [],
};

const headerSearchSlice = createSlice({
  name: 'headerSearch',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRecipe: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const { setSearch, setRecipe } = headerSearchSlice.actions;

export default headerSearchSlice.reducer;
