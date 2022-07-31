import { useGetGameByIdQuery } from '@service/data.slice';
import { useParams } from 'react-router-dom';
import './page.style.scss';

type ParamTypes = {
  gameId: string;
};

export const GameDetailPage = () => {
  const { gameId } = useParams<ParamTypes>();

  const { data, error, isLoading } = useGetGameByIdQuery(gameId);

  if (!isLoading && !error && !data) {
    return <span>no data</span>;
  }

  if (error) {
    console.log(error);
    return <span>Something went wrong</span>;
  }

  if (isLoading) {
    return <span>Fetching data</span>;
  }

  const gameDetails = data?.[0];

  if (!gameDetails) {
    return <span>Nothing to see here!</span>;
  }
  return (
      <div className='page'>
        <div className='game-page'>
          <h1 className='game-page__title'>{gameDetails?.name}</h1>
          <span>{gameDetails?.provider}</span>
          <span>{gameDetails?.gameType}</span>
          <span>{gameDetails?.tags?.join(',')}</span>
        </div>
      </div>
  );
};