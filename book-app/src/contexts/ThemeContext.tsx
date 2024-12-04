import { createContext, PropsWithChildren, useReducer } from 'react';

type Theme = 'light' | 'dark';

let currentTheme: Theme = 'light';

type ThemeContextType = {
  theme: Theme;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: currentTheme,
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  // @ts-ignore
  const forceRender = useReducer(() => ({}))[1]; // hack! aby uniknąć użycia useState

  const changeTheme = () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    forceRender();
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
