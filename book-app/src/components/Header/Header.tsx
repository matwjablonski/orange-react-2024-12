import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { HeaderProps } from './types';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { Footer, StyledFooter } from '../Footer/Footer';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  ${StyledFooter} {
    background-color: yellow;
  }
`

export const Header = ({ name, onLogin }: HeaderProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [value, setValue] = useState(0);

  const handleLogin = () => {
    setIsUserLoggedIn((prevState) => !prevState);
    onLogin && onLogin();
  };

  useEffect(() => {
    console.log('2');

    return () => {
      console.log('1');
    }
  }, [value]);

  return (
    <HeaderWrapper>
      <header className={styles.header}>
        <Nav />
        <p>Witaj w naszej aplikacji książkowej</p>
        {isUserLoggedIn ? <User>
          <div onClick={() => setValue(v => v + 1)}>
            Jesteś zalogowany jako: <strong>{name}</strong>
          </div>
        </User> : null}
        <button type="button" onClick={handleLogin}>{isUserLoggedIn ? 'Wyloguj' : 'Zaloguj'}</button>

        <StyledFooter />
      </header>
    </HeaderWrapper>
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
