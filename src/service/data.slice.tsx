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
    const gamesList = JSON.parse(JSON.stringify(games.data));
    gamesList.map((ele:IGame) => {
      ele.colorIndex = Math.floor(Math.random() * 5);
      if (ele.tags && ele.tags.length > 3) {
        const splicedTags = ele.tags.concat().splice(0, 3);
        splicedTags.push(`+ ${ele.tags.length - 3} More` );
        ele.splicedTags = splicedTags;
      } 
      if (!ele.splicedTags) ele.splicedTags = [];
      return ele;
    });

    if (!filterValue) return gamesList;
    return gamesList.filter((game: IGame) => game.name.toLowerCase().includes(filterValue.toLowerCase())) || [];
  },
);

export const {
  useGetGamesQuery,
  useGetGameByIdQuery,
} = gameApi;