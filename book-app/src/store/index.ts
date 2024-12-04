import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';

const rootReducer = {
  user: userReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;
