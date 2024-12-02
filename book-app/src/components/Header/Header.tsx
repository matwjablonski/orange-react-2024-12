import { useState } from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { HeaderProps } from './types';

export const Header = ({ name, onLogin }: HeaderProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsUserLoggedIn((prevState) => !prevState);
    onLogin && onLogin();
  };

  return (
    <header>
      <p>Witaj w naszej aplikacji książkowej</p>
      {isUserLoggedIn ? <User>
        <div>
          Jesteś zalogowany jako: <strong>{name}</strong>
        </div>
      </User> : null}
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
