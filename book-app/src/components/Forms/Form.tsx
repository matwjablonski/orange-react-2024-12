import { PropsWithChildren } from 'react';
import { FormProps } from './types';

export const Form = ({ onSubmit, children }: PropsWithChildren<FormProps>) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type="submit">Wyślij</button>
    </form>
  )
}

