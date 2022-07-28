import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGame } from '@interfaces/game.interface';

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
 
export const {
  useGetGamesQuery,
  useGetGameByIdQuery,
} = gameApi;