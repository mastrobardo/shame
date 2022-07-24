import { IGame } from '@interfaces/game.interface';
import {
  useGetGamesQuery,
} from '@service/data.slice';
import { GameItem } from './GameItem/gameItem';

import './gameList.style.scss';

export const GameList = () => {

  const { data, error, isLoading } = useGetGamesQuery();
  if (!isLoading && !error && !data) {
    return <span>no data</span>;
  }

  if (error) {
    console.log('ERROR', error);
    return <span>Something went wrong</span>;
  }

  if (isLoading) {
    return <span>Fetching data</span>;
  }

  

  return (<div>
        {data?.map((ele: IGame) => <GameItem {...ele} key={ele.id} />)}
    </div>);

};