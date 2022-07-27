import React from 'react';
import { GameList } from '@components/GameList/gameList';
import { useGetGamesQuery } from '@service/data.slice';

export const Home = () => {
  const { data, error, isLoading } = useGetGamesQuery();

  if (!isLoading && !error && !data) {
    return <span>no data</span>;
  }

  if (error) {
    return <span>Something went wrong</span>;
  }

  if (isLoading) {
    return <span>Fetching data</span>;
  }
  
  return (
    <div>
      <h1>Redux + TypeScript Game Lobby</h1>
      <GameList />
    </div>
  );
};
