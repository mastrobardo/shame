import React from 'react';
import { GameList } from '@components/GameList/gameList';
import { useGetGamesQuery } from '@service/data.slice';
import { Header } from '@components/Header/Header';
import { Loader } from '@components/Loader/loader';

export const Home = () => {
  const { data, error, isLoading } = useGetGamesQuery();

  if (!isLoading && !error && !data) {
    return <span>no data</span>;
  }

  if (error) {
    throw new Error('Something went wrong!');
  }

    return <Loader />
  
  return (
    <div className='page'>
      <Header />
      <GameList />
    </div>
  );
};
