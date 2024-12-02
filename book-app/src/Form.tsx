import { InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type Field = {
  fieldType: 'input' | 'textarea';
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  // fields: ReactNode[];

  // additionalFields?: Field[];
}

export const Form = ({ onSubmit, children }: PropsWithChildren<FormProps>) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      {/* {additionalFields && additionalFields.map((field) => {
        if (field.fieldType === 'input') {
          return (
            <label key={field.name}>
              {field.label}
              <input {...field} />
            </label>
          )
        }
      })} */}
      <button type="submit">Wyślij</button>
    </form>
  )
}


