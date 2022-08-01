import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test-utils';
import { GameDetailPage } from './GamePage';
import { IGame } from '@interfaces/game.interface';

const gameId: string = 'relax_skywind_rlx.sw.sw.sw_thlaki';

const gameDefinition: IGame = {
  "id": "relax_skywind_rlx.sw.sw.sw_boofgemenobufe",
  "name": "Book of Gems Megaways",
  "tags": [
    "High Volatility",
    "Free Spins Feature",
    "Megaways",
    "Special Wilds",
    "Expanding Wilds",
    "Multiplying Wilds",
    "Egypt",
    "Gems",
    "Scatter",
    "Skywind"
  ],
  "provider": "Skywind",
  "gameType": "video_slots",
  "colorIndex": 1,
}

export const handlers = [
  rest.get(`http://localhost:9000/games/${gameId}`, (req, res, ctx) => {
    return res(ctx.json([gameDefinition]), ctx.delay(150));
  }),
];

export const errorHandlers = [
  rest.get('http://localhost:9000/games/?id=inesistentId', (req, res, ctx) => res(ctx.status(500), ctx.json(null))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('Game Page component should manage data fetch states', async () => {
  //@ts-ignore
  server.use(handlers);
  const { container } = renderWithProviders(<GameDetailPage />);

  expect(screen.queryByText(/Fetching data/i)).toBeInTheDocument();

  const gameTitle = await container.getElementsByClassName('game-page__title');
  screen.logTestingPlaygroundURL();
  expect(gameTitle).toBeTruthy();
  expect(screen.queryByText(/Fetching data\.\.\./i)).not.toBeInTheDocument();
});

test('GamePage component should manage data fetch errors', async () => {
  //@ts-ignore
  server.use(errorHandlers);
  renderWithProviders(<GameDetailPage />);
  expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument();
});
