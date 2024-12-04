import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
`

type ButtonReverseProps = {
  size?: 'big' | 'small';
};

export const ButtonReverse = styled(Button)<ButtonReverseProps>`
  ${({ size }) => size === 'big' ? 'padding: 20px 40px;' : 'padding: 5px 10px;'}
  background-color: #dc3545;
`
