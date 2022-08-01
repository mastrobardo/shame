import { GameItem } from './gameItem';
import { render, screen } from '@testing-library/react';
import { IGame } from '@interfaces/game.interface';
import { BrowserRouter } from 'react-router-dom';

describe('GameItem', () => {
  const gameItemProps: IGame = {
    id: 'an-id',
    name: 'some name',
    tags: ['some', 'tags'],
    gameType: 'somegametype',
    provider: 'agreatprovider',
    colorIndex: 1,
  };
  test('it should render the passed props', () => {
    render(<BrowserRouter><GameItem {...gameItemProps} /></BrowserRouter>);

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
      colorIndex: 1,
    };
    const { container } = render(<BrowserRouter><GameItem {...propsWitoutName} /></BrowserRouter>);
    expect(container).toBeEmptyDOMElement();
  });
});