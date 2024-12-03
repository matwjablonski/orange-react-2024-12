import { useEffect, useRef, useState } from 'react';
import { Form } from './Form'
import { Input } from './Input'
import { cleanForm } from '../../utils/form';

export const ContactForm = () => {
  const firstInputRef = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    firstInputRef.current?.focus();
  }, [])

  return (
    <Form 
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Wysłano formularz', values);
        setValues(cleanForm(values))
      }}
    >
      <Input
        key="name-field"
        label="Imię"
        type="text"
        name="name"
        required
        handleChange={handleChange}
        value={values.name}
        ref={firstInputRef}
      />
      <Input
        key="lastName-field"
        label="Naziwsko"
        type="text"
        name="lastName"
        required
        handleChange={handleChange}
        value={values.lastName}
      />
    </Form>
  );
};
