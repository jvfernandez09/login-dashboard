import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { User } from '../../types/auth';

interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      const uniqueUsers = action.payload.filter(
        (newUser) => !state.users.some((user) => user.userName === newUser.userName)
      );
      state.users = [...state.users, ...uniqueUsers];
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.branchId !== action.payload);
    },
  },
});

export const { addUser, setUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;
