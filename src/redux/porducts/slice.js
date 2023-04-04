import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './operations';

const initialState = { categories: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      action.payload.groups.pop();
      state.categories = action.payload.groups;
    },
    [getCategories.rejected](state, action) {
      console.log(action.payload);
    },
    [getCategories.pending](state) {},
  },
});

export const productsReducer = productsSlice.reducer;
