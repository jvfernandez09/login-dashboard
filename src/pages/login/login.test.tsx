import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './login';

const mockStore = configureStore();

test('renders login form', async () => {
  const store = mockStore({
    auth: {
      isAuthenticated: false,
      user: null,
      error: null,
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  );

  const branchIdInput = screen.getByLabelText(/Branch ID/i);
  const usernameInput = screen.getByLabelText(/Username/i);
  const passwordInput = screen.getByLabelText(/Password/i);
  const loginButton = screen.getByTestId('login-button');

  expect(branchIdInput).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test('render error message', async () => {
  const store = mockStore({
    auth: {
      isAuthenticated: false,
      user: null,
      error: 'Invalid credentials',
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  );

    const errorMessage = screen.getByText('Error: Invalid credentials');
    expect(errorMessage).toBeInTheDocument();
});


