import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { HeaderProps } from './types';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { Footer, StyledFooter } from '../Footer/Footer';
import styled from 'styled-components';
import { Avatar } from '../Avatar/Avatar';
import { UserContext } from '../../contexts/UserContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HeaderWrapper = styled.div`
  ${StyledFooter} {
    background-color: yellow;
  }
`

export const Header = ({ name }: HeaderProps) => {
  const currentUser = useSelector<RootState>(state => state.user.currentUser);
  const { changeTheme }= useContext(ThemeContext);
  const [value, setValue] = useState(0);

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
        {/* @ts-ignore  */}
        {currentUser.isLoggedIn ? <User>
          <div onClick={() => setValue(v => v + 1)}>
            Jesteś zalogowany jako: <strong>{name}</strong>
            <Avatar name={name} src="https://placehold.co/150" />
            <button onClick={changeTheme}>Zmień theme</button>  
          </div>
        </User> : null}
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
