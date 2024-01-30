import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth.tsx';
import usersReducer from './slice/users.tsx';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;