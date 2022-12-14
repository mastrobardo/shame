import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { gameApi } from '@service/data.slice';
import search from '@service/search.slice';

//import logger from 'redux-logger';

const rootReducer = combineReducers({
  [gameApi.reducerPath]: gameApi.reducer,
  search: search,
});

export const setupStore = function (preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    //@ts-ignore
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(gameApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
