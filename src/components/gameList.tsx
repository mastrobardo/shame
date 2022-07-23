import {
    useGetGamesQuery,
} from '@service/data.slice';

import './gameList.style.scss';

export const GameList = () => {

    const { data, error, isLoading } = useGetGamesQuery();

    if (isLoading) {
        return <span>no data</span>;
    }

    if (error) {
        return <span>Something went wrong</span>;
    }

    return (<div>
        {data?.map((ele, idx) => <span key={idx}>{ele.id}</span>)}
    </div>);

};