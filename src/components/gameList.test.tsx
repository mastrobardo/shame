import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test-utils';
import { GameList } from './gameList';

export const handlers = [
  rest.get('http://localhost:9000/games', (req, res, ctx) => {
    return res(ctx.json([{id: 'a-game-id'}]), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('GameList component should manage data fetch states', async () => {
  renderWithProviders(<GameList />);

  // initial state: nothing started yet
  expect(screen.getByText(/no data/i)).toBeInTheDocument();
  expect(screen.queryByText(/Fetching data\.\.\./i)).not.toBeInTheDocument();
 

  // after some time, the games list should be received
  expect(await screen.findByText(/a-game-id/i)).toBeInTheDocument();
  expect(screen.queryByText(/no data/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Fetching data\.\.\./i)).not.toBeInTheDocument();
});