import { forwardRef } from 'react';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(({label, handleChange, ...rest}, ref) => {
  return (
    <label>
      {label}
      <input onChange={handleChange} { ...rest } ref={ref} />
    </label>
  )
});
