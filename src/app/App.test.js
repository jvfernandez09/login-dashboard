import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore();

test('renders login page', () => {
  const store = mockStore({
    auth: {
      isAuthenticated: false,
    },
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const loginElement = screen.getAllByText(/Login/i);
  const loginButton = screen.getByRole('button', { name: /Login/i });

  expect(loginElement[0]).toHaveClass('text-2xl');
  expect(loginButton).toHaveClass('bg-blue-500');
});

