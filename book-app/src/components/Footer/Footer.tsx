import styled from 'styled-components';

type FooterProps = {
  className?: string;
}

const Em = styled.em`
  color: pink;
`

export const UserNameFooter = () => (
  <Em>Mateusza Jabłońskiego</Em>
)

export const Footer = ({ className }: FooterProps) => (
  <footer className={className}>
    <p>Aplikacja przygotowana przez <UserNameFooter /></p>
  </footer>
)

export const StyledFooter = styled(Footer)`
  background-color: red;

  p {
    color: blue;

    em {
      color: white;
    }
  }
`;
