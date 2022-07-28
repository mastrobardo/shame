import { renderWithProviders } from '@utils/test-utils';
import { GameList } from './gameList';
import * as mockState from './__mocks__/initialStateMock.json';

describe('GameList', () => {
  test.only('should only render the visible elements in the grid', () => {

    const { container } = renderWithProviders(<GameList />, {
      //@ts-ignore
      preloadedState: mockState,
    });

    expect(container.getElementsByClassName('gameItem').length).toEqual(4);
  });
});