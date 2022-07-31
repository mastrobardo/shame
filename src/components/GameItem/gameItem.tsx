import { Lightning } from '@components/Lightining/lightining';
import { IGame } from '@interfaces/game.interface';
import { Link } from 'react-router-dom';
import { MinifiedTags } from './gameItem.tags';
import './gameItem.style.scss';

export const BASE_GAME_ITEM_DIMENSIONS = {
  width: 414,
  height: 257,
};

export const GameItem = ({ id, name, splicedTags, provider, gameType, colorIndex, styles }: IGame) => {
  if (!name) return null;

  return (
    <div className='gameItem' style={styles}>
      <div className={'gameItem__container'} >
        <Link to={`/${id}`} className={'gameItem__link'}>
          <Lightning colorIndex={colorIndex} id={id}/>
          <div className='gameItem__infos'>
            <h1 className='gameItem__title'>{name}</h1>
            <span className='gameItem__provider'>{gameType}<br/>by {provider}</span>
          </div>
          <MinifiedTags tags={splicedTags!} />

        </Link>
      </div>
    </div>
  );
};