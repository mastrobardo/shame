import { IGame } from '@interfaces/game.interface';
import './gameItem.style.scss';

export const GameItem = ({ id, name, tags, provider, gameType }: IGame) => {
    return (
        <div className='gameItem'>
            <span>{id}</span>
            <span>{name}</span>
            <span>{provider}</span>
            <span>{gameType}</span>
        </div>
    );
};