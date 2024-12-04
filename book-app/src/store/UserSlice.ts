import { createSlice } from '@reduxjs/toolkit';

type User = {
  name: string | null;
  isLoggedIn: boolean;
}

type UserState = {
  currentUser: User
};

const initialState: UserState = {
  currentUser: {
    name: null,
    isLoggedIn: false,
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = {
        name: action.payload,
        isLoggedIn: true,
      }

      return state;
    },
    logout: (state) => {
      state.currentUser = {
        name: null,
        isLoggedIn: false,
      }

      return state;
    },
  },
});

export const {
  login,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
