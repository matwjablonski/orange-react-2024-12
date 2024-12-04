import { createContext, Dispatch } from 'react';

type UserContextType = {
  data: User;
  setData: Dispatch<React.SetStateAction<User>>;
}

export type User = {
  name: string;
  isLoggedIn: boolean;
} | null;

export const UserContext = createContext<UserContextType>({
  data: null,
  setData: () => {},
});
