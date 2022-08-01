import React from 'react';
import { GameList } from '@components/GameList/gameList';
import { useGetGamesQuery } from '@service/data.slice';
import { Header } from '@components/Header/Header';

export const Home = () => {
  const { data, error, isLoading } = useGetGamesQuery();

  if (!isLoading && !error && !data) {
    return <span>no data</span>;
  }

  if (error) {
    throw new Error('Something went wrong!');
  }

  if (isLoading) {
    return <span>Fetching data</span>;
  }
  
  return (
    <div className='page'>
      <Header />
      <GameList />
    </div>
  );
};
