import { useState } from 'react';
import { Form } from './Form'
import { Input } from './Input'

export const ContactForm = () => {
  const [ values, setValues ] = useState({
    name: '',
    lastName: '',
  });

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Form 
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Wysłano formularz', values);
      }}
      fields={[
        <Input key="name-field" label="Imię" type="text" name="name" required handleChange={handleChange} value={values.name} />,
        <Input key="lastName-field" label="Naziwsko" type="text" name="lastName" required handleChange={handleChange} value={values.lastName} />
      ]}
    />
  );
};
