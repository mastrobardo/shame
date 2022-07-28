import { renderWithProviders } from '@utils/test-utils';
import { render, screen } from '@testing-library/react';
import { Header } from './Header'

describe('Header', () => {
    test('it should contain the Search componenet', () => {
        const { container } = render(<Header />);

        const searchBox = container.getElementsByClassName('search-box');
        expect(searchBox.length).toEqual(1);
    })
})