import { renderWithProviders } from '@utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Search } from './Search';

describe.only('Search', () => {
  test.only('should only render the visible elements in the grid', async () => {

    const { getByRole, store } = renderWithProviders(<Search />, {
      //@ts-ignore
      preloadedState: { value:'' }
    });

    userEvent.type(screen.getByRole('input'), 'Tiger');
    expect(await store.getState().search.value).toEqual('Tiger')
  });
});