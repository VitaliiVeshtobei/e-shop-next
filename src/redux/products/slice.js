import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [], productsByCategory: [], productsFilter: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getCategories(state, action) {
      localStorage.setItem(
        'categories',
        JSON.stringify(
          action.payload.map((item) => {
            return {
              name_multilang: item.name_multilang,
              id: item.id,
            };
          })
        )
      );
      state.categories = action.payload;
    },
    getProductsByCategory(state, action) {
      state.productsByCategory = action.payload;
    },
    getProductsFilter(state, action) {
      state.productsFilter = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const { getCategories, getProductsByCategory, getProductsFilter } = productsSlice.actions;
