import {
  useGetGamesQuery,
} from '@service/data.slice';

import './gameList.style.scss';

export const GameList = () => {

  const { data, error, isLoading } = useGetGamesQuery();
  if (!isLoading && !error && !data) {
    return <span>no data</span>;
  }

  if (error) {
    console.log("ERROR", error)
    return <span>Something went wrong</span>;
  }

  if (isLoading) {
    return <span>Fetching data</span>;
  }

  

  return (<div>
        {data?.map((ele, idx) => <span key={idx}>{ele.id}</span>)}
    </div>);

};