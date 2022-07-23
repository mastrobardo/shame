import { configureStore, MiddlewareArray, combineReducers, PreloadedState, getDefaultMiddleware } from '@reduxjs/toolkit';
import { gameApi } from '@service/data.slice';

import logger from 'redux-logger';

const rootReducer = combineReducers({
  [gameApi.reducerPath]: gameApi.reducer,
});

export const setupStore = function (preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    //@ts-ignore
    middleware: new MiddlewareArray().concat(getDefaultMiddleware(), gameApi.middleware, logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
