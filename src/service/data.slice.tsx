import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGame } from '@interfaces/game.interface';
import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from './search.slice';

const baseUrl: string = 'http://localhost:9000/';

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getGames: builder.query<IGame[], void>({
      query: () => 'games',
    }),
    getGameById: builder.query<IGame, string>({
      query: (id: string) => `games/?id=${id}`,
    }),
  }),
});

export const gamesSelector = gameApi.endpoints.getGames.select();

export const gameFilteredSelector = createSelector(
  gamesSelector,
  selectFilterValue,
  (games, filterValue) => {
    if (!games || !games?.data) return [];
    if (!filterValue) return games.data;
    return games.data.filter((game: IGame) => game.name.toLowerCase().includes(filterValue.toLowerCase())).map((ele:IGame) => ele.colorIndex = Math.floor(Math.random() * 5)) || []; 
  },
);

export const {
  useGetGamesQuery,
  useGetGameByIdQuery,
} = gameApi;