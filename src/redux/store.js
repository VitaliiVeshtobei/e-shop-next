import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './porducts/slice';

export const store = configureStore({
  reducer: { products: productsReducer },
});
