import { renderWithProviders } from '@utils/test-utils';
import { GameList, arrayToMatrix } from './gameList';
import * as mockState from './__mocks__/initialStateMock.json';
import { testArray } from './__mocks__/testArray';

describe('GameList', () => {
  test('should only render the visible elements in the grid', () => {

    const { container } = renderWithProviders(<GameList />, {
      //@ts-ignore
      preloadedState: mockState,
    });

    expect(container.getElementsByClassName('gameItem').length).toEqual(4);
  });
});


describe('Array to matrix', () => {
  test('it should create an array of arrays given a monodimensional arrays and the colums value', () => {
    const result = arrayToMatrix(testArray, 2);
    expect(result[0].length).toEqual(2);
  });
});