import { IGame } from '@interfaces/game.interface';
import './gameItem.style.scss';

export const BASE_GAME_ITEM_DIMENSIONS = {
  width: 414,
  height: 257,
};

export const GameItem = ({ id, name, tags, provider, gameType, styles }: IGame) => {
  if (!name) return null;
  return (
        <div className='gameItem' style={styles}>
            <div style={{ width:349, outline: '1px solid black', height: 220}}>
                <span>{id}</span>
                <span>{name}</span>
                <span>{provider}</span>
                <span>{gameType}</span>
                <span>{tags?.join(',')}</span>
            </div>
        </div>);
};