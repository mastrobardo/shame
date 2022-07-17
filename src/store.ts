// file: store.ts
import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

const reducers = {};

const preloadedState = {};

const store = configureStore({
  reducers,
  middleware: [logger],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export default store;
