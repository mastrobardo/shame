import { GameItem, BASE_GAME_ITEM_DIMENSIONS } from '@components/GameItem/gameItem';
import { useAppSelector } from '@hooks/app.hook';
import useWindowDimensions from '@hooks/windowSize.hook';
import {
  gameFilteredSelector,
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
  //@ts-ignore
  const gameList = useAppSelector(gameFilteredSelector);
  const { width } = useWindowDimensions();
  const [columnCount, setColumnCount] = useState<number>(1);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
  
    setVisible(!!gameList.length);

    if (width) {
      setColumnCount(Math.floor(window.innerWidth / BASE_GAME_ITEM_DIMENSIONS.width));
    }

  }, [window.innerWidth, width, gameList]);


  const Cell = useMemo(() => ({ columnIndex, rowIndex, style }: TCell) => {
    if (!gameList) {
      return null;
    }
    const myStyles: React.CSSProperties = {
      ...style,
      top: rowIndex === 0 ?  Number(style.top) + CELL_GAP / 2 :  Number(style.top),
    };
    const props = { ...gameList[columnIndex] };
    return <GameItem {...props} styles={myStyles} key={`${columnIndex}${rowIndex}`} />;

  }, [gameList]);

  if (!visible) {
    return <span>NO RESULTS</span>;
  }

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