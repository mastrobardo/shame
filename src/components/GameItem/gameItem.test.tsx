import { GameItem } from './gameItem';
import { render, screen } from '@testing-library/react';
import { IGame } from '@interfaces/game.interface';

describe('GameItem', () => {
  const gameItemProps: IGame = {
    id: 'an-id',
    name: 'some name',
    tags: ['some', 'tags'],
    gameType: 'somegametype',
    provider: 'agreatprovider',
    parentRef: null,
  };
  test('it should render the passed props', () => {
    render(<GameItem {...gameItemProps} />);

    expect(screen.queryByText(/an-id/i)).toBeInTheDocument();
    expect(screen.queryByText(/some name/i)).toBeInTheDocument();
    expect(screen.queryByText(/somegametype/i)).toBeInTheDocument();
    expect(screen.queryByText(/agreatprovider/i)).toBeInTheDocument();
  });

  test('it should not render if name is not present', () => {
    const propsWitoutName = {
      id: 'an-id',
      name: '',
      tags: ['some', 'tags'],
      gameType: 'somegametype',
      provider: 'agreatprovider',
      parentRef: null,
    }
    const { container } = render(<GameItem {...propsWitoutName} />);
    expect(container).toBeEmptyDOMElement()
  });
});