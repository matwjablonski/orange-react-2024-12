import { ChangeEvent, InputHTMLAttributes } from 'react';

export type Field = {
  fieldType: 'input' | 'textarea';
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export type InputProps = {
  label: string;
  handleChange(e: ChangeEvent): void;
  ref?: any;
} & InputHTMLAttributes<HTMLInputElement>
