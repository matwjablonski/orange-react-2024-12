import { InputProps } from './types';

export const Input = ({label, handleChange, ...rest}: InputProps) => {
  return (
    <label>
      {label}
      <input onChange={handleChange} { ...rest }/>
    </label>
  )
}
