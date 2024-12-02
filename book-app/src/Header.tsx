import { useState } from 'react';
import PropTypes from 'prop-types';

type HeaderProps = {
  name: string;
  onLogin?: () => void;
}

export const Header = ({ name, onLogin }: HeaderProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsUserLoggedIn((prevState) => !prevState);
    onLogin && onLogin();
  };

  return (
    <header>
      <p>Witaj w naszej aplikacji książkowej {isUserLoggedIn ? <>[<strong>{name}</strong>]</> : ''}</p>
      <button type="button" onClick={handleLogin}>{isUserLoggedIn ? 'Wyloguj' : 'Zaloguj'}</button>
    </header>
  )
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.oneOf(['admin', 'user'])),
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
}
