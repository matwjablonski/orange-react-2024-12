import { useState } from 'react';

export const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsUserLoggedIn((prevState) => !prevState);
  };

  return (
    <header>
      <p>Witaj w naszej aplikacji książkowej {isUserLoggedIn ? 'Mateuszu' : ''}</p>
      <button type="button" onClick={handleLogin}>{isUserLoggedIn ? 'Wyloguj' : 'Zaloguj'}</button>
    </header>
  )
};
