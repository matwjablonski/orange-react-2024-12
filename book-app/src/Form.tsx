import { InputHTMLAttributes, ReactNode } from 'react';

type Field = {
  fieldType: 'input' | 'textarea';
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  fields: ReactNode[];

  additionalFields?: Field[];
}

export const Form = ({ fields, onSubmit, additionalFields }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {fields}
      {additionalFields && additionalFields.map((field) => {
        if (field.fieldType === 'input') {
          return (
            <label key={field.name}>
              {field.label}
              <input {...field} />
            </label>
          )
        }
      })}
      <button type="submit">Wyślij</button>
    </form>
  )
}


