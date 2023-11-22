import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { QueueScreen } from './QueueScreen';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

const wrapper = () => {
  render(
    <Provider store={store}>
      <QueueScreen />
    </Provider>
  );
};

describe('QueueScreen', () => {
  beforeEach(() => {
    wrapper();
  });

  describe('CustomerCard', () => {
    it('should display a loading message on initial load', () => {
      const loadingText = screen.getByText('Loading...');
      expect(loadingText).toBeTruthy();
    });

    it.each([
      { customerName: 'Fraser' },
      { customerName: 'Alex Forbes-Reed' },
      { customerName: 'Steve' },
      { customerName: 'John Smith' },
    ])('should render the customer name in queue', async ({ customerName }) => {
      await waitFor(() => {
        const customer = screen.getByText(customerName);
        expect(customer).toBeInTheDocument();
      });
    });
  });

  describe('Search Bar', () => {
    it('should display the search bar', () => {
      const input = screen.getByTestId('search-bar');
      expect(input).toBeInTheDocument();
    });

    it('should filter out the customer queue based on input value', async () => {
      const input = screen.getByTestId('search-bar');

      fireEvent.change(input, { target: { value: 'John' } });

      await waitFor(() => {
        const filteredCustomer = screen.getByText('John Smith');
        expect(filteredCustomer).toBeInTheDocument();
      });
    });
  });

  describe('Refresh Button', () => {
    it('should display the refresh button', async () => {
      const refreshButton = screen.getByRole('button');
      expect(refreshButton).toBeInTheDocument();
    });
  });
});
