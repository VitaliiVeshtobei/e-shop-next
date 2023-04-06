import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [], productsByCategory: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getCategories(state, action) {
      state.categories = action.payload;
    },
    getProductsByCategory(state, action) {
      state.productsByCategory = action.payload.products;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const { getCategories, getProductsByCategory } = productsSlice.actions;
