import { renderWithProviders } from '@utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';

describe.only('Search', () => {
  test.only('should change state on type', async () => {

    const { store } = renderWithProviders(<Search />, {
      //@ts-ignore
      preloadedState: { value:'' },
    });

    userEvent.type(screen.getByRole('input'), 'Tiger');
    setTimeout(() => {
      //this field is debounced
      expect(store.getState().search.value).toEqual('Tiger');
    }, 1000);
    
  });
});