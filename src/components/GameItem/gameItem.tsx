import { Lightning } from '@components/Lightining/lightining';
import { IGame } from '@interfaces/game.interface';
import { Link } from 'react-router-dom';
import './gameItem.style.scss';

export const BASE_GAME_ITEM_DIMENSIONS = {
  width: 414,
  height: 257,
};

export const GameItem = ({ id, name, tags, provider, gameType, colorIndex, styles }: IGame) => {
  if (!name) return null;
  return (
    <div className='gameItem' style={styles}>
      <div className={'gameItem__container'} >
        <Link to={`/${id}`} className={'gameItem__link'}>
          <Lightning colorIndex={colorIndex}/>
          <span>{id}</span>
          <span>{name}</span>
          <span>{provider}</span>
          <span>{gameType}</span>
          <span>{tags?.join(',')}</span>
        </Link>
      </div>
    </div>
  );
};