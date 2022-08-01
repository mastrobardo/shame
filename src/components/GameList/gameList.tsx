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


//@ts-ignore
const arrayToMatrix = (array, columns) => Array(Math.ceil(array.length / columns)).fill('').reduce((acc, cur, index) => {
  return [...acc, [...array].splice(index * columns, columns)];
}, []);

export const GameList = () => {
  //@ts-ignore
  const gameList = useAppSelector(gameFilteredSelector);
  const { width } = useWindowDimensions();
  const [columnCount, setColumnCount] = useState<number>(1);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
  
    setVisible(!!gameList.length);

    if (width) {
      setColumnCount(Math.max(1, Math.floor(window.innerWidth / BASE_GAME_ITEM_DIMENSIONS.width)));
    }      
  }, [window.innerWidth, width, gameList]);

  const transformed:Array<any> = useMemo(() => {
    return arrayToMatrix(gameList, columnCount);
  }, [gameList, columnCount]);

  const Cell = ({ columnIndex, rowIndex, style }: TCell) => {
    if (!gameList) {
      return null;
    }
    const myStyles: React.CSSProperties = {
      ...style,
      top: rowIndex === 0 ?  Number(style.top) + CELL_GAP / 2 :  Number(style.top),
    };
    
    const props = transformed.length && transformed[rowIndex || 0][columnIndex] || {};
    return <GameItem {...props} styles={myStyles} key={props.id} />;

  };

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
        width={414}
        >
        {Cell}
      </Grid>
    </div>

  );

};