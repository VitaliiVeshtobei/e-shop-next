import { createSlice } from '@reduxjs/toolkit';
// import { getCategories } from './operations';

const initialState = { categories: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getCategories(state, action) {
      state.categories = action.payload.groups;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getCategories.fulfilled, (state, action) => {
  //       action.payload.groups.pop();
  //       state.categories = action.payload.groups;
  //     })
  //     .addCase(getCategories.rejected, (state, action) => {
  //       console.log(action.payload);
  //     })
  //     .addCase(getCategories.pending, (state) => {});
  // },
});

export const productsReducer = productsSlice.reducer;
export const { getCategories } = productsSlice.actions;