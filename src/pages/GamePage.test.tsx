import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test-utils';
import { GameDetailPage } from './GamePage';

const gameId = 'relax_skywind_rlx.sw.sw.sw_thlaki';
export const handlers = [
  rest.get(`http://localhost:9000/games/${gameId}`, (req, res, ctx) => {
    return res(ctx.json([{name: 'Book of Gems Megaways'}]), ctx.delay(150));
  }),
];

export const errorHandlers = [
  rest.get('http://localhost:9000/games/inesistentId', (req, res, ctx) => res(ctx.status(500), ctx.json(null))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('Game Page component should manage data fetch states', async () => {
  const {container} = renderWithProviders(<GameDetailPage />);

  expect(screen.queryByText(/Fetching data/i)).toBeInTheDocument();

  const gameTitle = await container.getElementsByClassName('game-page-title');
  expect(gameTitle).toBeTruthy();
  expect(screen.queryByText(/Fetching data\.\.\./i)).not.toBeInTheDocument();
});

test('HomePage component should manage data fetch errors', async () => {
  //@ts-ignore
  server.use(errorHandlers);
  renderWithProviders(<GameDetailPage />);
  expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument();
});
