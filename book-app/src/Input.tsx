import { ChangeEvent, InputHTMLAttributes } from 'react';

type InputProps = {
  label: string;
  handleChange(e: ChangeEvent): void;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({label, handleChange, ...rest}: InputProps) => {
  return (
    <label>
      {label}
      <input onChange={handleChange} { ...rest }/>
    </label>
  )
}
