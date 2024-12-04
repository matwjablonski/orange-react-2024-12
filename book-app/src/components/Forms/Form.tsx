import { PropsWithChildren, useRef } from 'react';
import { FormProps } from './types';

export const Form = ({ onSubmit, children }: PropsWithChildren<FormProps>) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit(e);

    if (formRef.current) {
      const sizes = formRef.current.getBoundingClientRect();
      console.log('reset form', sizes);
    }
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      {children}
      <button type="submit" className="mt-10 text-center flex ">Wyślij</button>
    </form>
  )
}

