import { Avatar as MuiAvatar } from '@mui/material'
import styled from 'styled-components';

type AvatarProps = {
  src: string;
  name: string;
}

const StyledAvatar = styled(MuiAvatar)`
  border: 2px solid red;
`

export const Avatar = ({ src, name }: AvatarProps) => {
  return <StyledAvatar alt={name} src={src} />
}
