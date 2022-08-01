import { useGetGameByIdQuery } from '@service/data.slice';
import { useParams } from 'react-router-dom';
import { MinifiedTags } from '@components/GameItem/gameItem.tags';
import './page.style.scss';
import './gamepage.style.scss';

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

  if (!gameDetails) {
    return <span>Nothing to see here!</span>;
  }
  return (
    <div className='page game-page'>
      <div className='game-page__wrapper'>
        <h1 className='game-page__title'>{gameDetails?.name}</h1>
        <div className='game-page__container'>
          <div className='game-page__column game-page__column-left'>
            <img className={'game-page__image'}
              src="https://via.placeholder.com/400x300.png?text=This+Is+A+Game+Main+Image"
              height='auto'
              alt="Placeholder"
              loading='lazy'
              width={'100%'}
            />
            <p className='game-page__gameType'>{gameDetails?.gameType}</p>
            <p className='game-page__provider'>by {gameDetails?.provider}</p>
          </div>
          <div className='game-page__column game-page__column-right'>
            <MinifiedTags tags={gameDetails?.tags!} standalone={true} />
          </div>
        </div>
      </div>
    </div>
  );
};