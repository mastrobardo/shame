import { useGetGameByIdQuery } from '@service/data.slice';
import { useParams } from 'react-router-dom';

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
    return <span>Something went wrong</span>;
  }

  if (isLoading) {
    return <span>Fetching data</span>;
  }

  const gameDetails = data?.[0];

  return (
    <>
      <div>
        <span>{gameId}</span>
        <h1>{gameDetails?.name}</h1>
        <span>{gameDetails?.provider}</span>
        <span>{gameDetails?.gameType}</span>
        <span>{gameDetails?.tags?.join(',')}</span>
      </div>
    </>
  );
};