import { GameItem, BASE_GAME_ITEM_DIMENSIONS } from '@components/GameItem/gameItem';
import { useAppSelector } from '@hooks/app.hook';
import useWindowDimensions from '@hooks/windowSize.hook';
import {
  gamesSelector,
} from '@service/data.slice';
import { useEffect, useMemo, useState } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import '../GameItem/gameItem.style.scss';

import './gameList.style.scss';

type TCell = {
  columnIndex: number;
  rowIndex?: number;
  style: React.CSSProperties;
};


const CELL_GAP = 48;

export const GameList = () => {

  const { data: gameList } = useAppSelector(gamesSelector);
  const { width } = useWindowDimensions();
  const [columnCount, setColumnCount] = useState<number>(1);

  useEffect(() => {
    if (width) {
      setColumnCount(Math.floor(window.innerWidth / BASE_GAME_ITEM_DIMENSIONS.width));
      //@ts-ignore
      /* const innerDiv: HTMLElement = document.querySelector('.gamelist > div');
      if(innerDiv) {
        innerDiv.style.width = window.innerWidth + 'px'
      }*/
    }
  }, [window.innerWidth, width]);


  const Cell = useMemo(() => ({ columnIndex, rowIndex, style }: TCell) => {
    if (!gameList) {
      return null;
    }
    const myStyles: React.CSSProperties = {
      ...style,
      // left: columnIndex === 0 ? Number(style.left) + CELL_GAP / 2 : Number(style.left) + columnIndex * CELL_GAP / 2,
    };
    const props = { ...gameList[columnIndex] };
    return <GameItem {...props} styles={myStyles} key={`${columnIndex}${rowIndex}`} />;
  }, [gameList]);


  return (
    <div className='gameList__container'>
      <Grid
        className='gameList'
        columnCount={columnCount}
        columnWidth={() =>  BASE_GAME_ITEM_DIMENSIONS.width}
        height={800}
        rowCount={(gameList?.length || 500) / columnCount}
        rowHeight={() => BASE_GAME_ITEM_DIMENSIONS.height + CELL_GAP}
        width={window.innerWidth}
        >
        {Cell}
      </Grid>
    </div>

  );

};