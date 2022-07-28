import { renderWithProviders } from '@utils/test-utils';
import { Header } from './Header';

describe('Header', () => {
  test('it should contain the Search componenet', () => {
    const { container } = renderWithProviders(<Header />);

    const searchBox = container.getElementsByClassName('search-box');
    expect(searchBox).toBeTruthy();
  });
});