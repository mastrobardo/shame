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

export const errorHandlers = [
  rest.get('http://localhost:9000/games', (req, res, ctx) => res(ctx.status(500), ctx.json(null))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('HomePage component should manage data fetch states', async () => {
  const {container} = renderWithProviders(<Home />);

  // initial state: start loading immediatly
  expect(screen.queryByText(/Fetching data/i)).toBeInTheDocument();

  // after some time, the games list should be received
  const gameList = await container.getElementsByClassName('gameList');
  expect(gameList).toBeTruthy();
  expect(screen.queryByText(/Fetching data\.\.\./i)).not.toBeInTheDocument();
});

test('HomePage component should manage data fetch errors', async () => {
  //@ts-ignore
  server.use(errorHandlers);
  renderWithProviders(<Home />);
  expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument();
});