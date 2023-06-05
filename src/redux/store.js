import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products/slice';
import { userReducer } from './user/slice';

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';

const persistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const makeStore = () => {
  const store = configureStore({
    reducer: { products: productsReducer, user: persistedReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  return store;
};

export const wrapper = createWrapper(makeStore);
