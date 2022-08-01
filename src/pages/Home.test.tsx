import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test-utils';
import { Home } from './Home';

export const handlers = [
  rest.get('http://localhost:9000/games', (req, res, ctx) => {
    return res(ctx.json([{id: 'a-game-id'}]), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({
  onUnhandledRequest: 'bypass',
}));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('HomePage component should manage data fetch states', async () => {
  const {container} = renderWithProviders(<Home />);
  // after some time, the games list should be received
  const gameList = await container.getElementsByClassName('gameList');
  expect(gameList).toBeTruthy();
});
