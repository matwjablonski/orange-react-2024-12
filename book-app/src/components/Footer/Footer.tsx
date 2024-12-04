import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';

type FooterProps = {
  className?: string;
}

const Em = styled.em`
  color: pink;
`

export const UserNameFooter = () => (
  <Em>Mateusza Jabłońskiego</Em>
)

export const Footer = ({ className }: FooterProps) => {
  const { theme }= useContext(ThemeContext);

  return (
    <footer className={className}>
      <p>Aplikacja przygotowana przez <UserNameFooter /></p>
      <p>Theme: {theme}</p>
    </footer>
  )
}

export const StyledFooter = styled(Footer)`
  background-color: red;

  p {
    color: blue;

    em {
      color: white;
    }
  }
`;
