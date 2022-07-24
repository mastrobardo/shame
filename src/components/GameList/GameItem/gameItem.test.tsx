import { GameItem } from "./gameItem";
import { render, screen } from '@testing-library/react';
import { IGame } from "@interfaces/game.interface";

describe.only('GameItem', () => {
    console.log(process.env.NODE_ENV)
    const gameItemProps: IGame = {
        id: 'an-id',
        name: 'some name',
        tags: ['some', 'tags'],
        gameType: 'somegametype',
        provider: 'agreatprovider',
    }
    test('it should render the passed props', () => {
        render(<GameItem {...gameItemProps} />);

        expect(screen.queryByText(/an-id/i)).toBeInTheDocument();
        expect(screen.queryByText(/some name/i)).toBeInTheDocument();
        expect(screen.queryByText(/somegametype/i)).toBeInTheDocument();
        expect(screen.queryByText(/agreatprovider/i)).toBeInTheDocument();
    });
});