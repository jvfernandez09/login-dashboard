import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Dashboard from './dashboard';
import { logout } from '../../store/slice/auth';
import { addUser, removeUser } from "../../store/slice/users.tsx"
import { users as mockUsers } from '../../mockdata/users';

const mockStore = configureStore();

test('renders Dashboard component', () => {
  const store = mockStore({
    auth: {
      user: {
        userName: 'testuser01555',
      },
    },
    users: {
      users: mockUsers,
    },
  });

  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  expect(screen.getByText('testuser01555')).toBeInTheDocument();
  expect(screen.getByTestId('logout-button')).toBeInTheDocument();
  expect(screen.getByText('Add User')).toBeInTheDocument();
  expect(screen.getByText('User Table')).toBeInTheDocument();
});

test('handles user actions ( fetch, delete, logout ) in Dashboard', async() => {
  const store = mockStore({
    auth: {
      user: {
        userName: 'testuser01',
      },
    },
    users: {
      users: mockUsers,
    },
  });

  render(
    <Provider store={store}>
      <Dashboard/>
    </Provider>
  );

    fireEvent.click(screen.getByTestId('logout-button'));
    expect(store.getActions()).toContainEqual(logout());

    fireEvent.click(screen.getAllByText('Remove')[0]);
    expect(store.getActions()).toContainEqual(removeUser(expect.any(Number)));

    await waitFor(() => {
        const actions = store.getActions();
        expect(actions).toContainEqual({
          type: 'users/setUsers',
          payload: mockUsers,
        });
    });

});
