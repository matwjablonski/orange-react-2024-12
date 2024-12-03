import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { HeaderProps } from './types';

export const Header = ({ name, onLogin }: HeaderProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [value, setValue] = useState(0);

  const handleLogin = () => {
    setIsUserLoggedIn((prevState) => !prevState);
    onLogin && onLogin();
  };

  useEffect(() => {
    console.log('Zaktualizowano komponent Header');

    return () => {
      console.log('Header component unmount');
    }
  }, [value]);

  return (
    <header>
      <p>Witaj w naszej aplikacji książkowej</p>
      {isUserLoggedIn ? <User>
        <div onClick={() => setValue(v => v + 1)}>
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
