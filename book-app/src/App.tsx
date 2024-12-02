import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { books as dataSource } from './data';
import { BooksList } from './Books';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactForm } from './ContactForm';

function App() {
  const [ values, setValues ] = useState({
    name: '',
    lastName: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <Header name="Mateuszu" onLogin={() => alert('zalogowano!')} />
      <main>
        <label>
          Pole niekontrolowane:
          <input />
        </label>
        <label>
          Pole kontrolowane:
          <input value={values.lastName} name="lastName" onChange={handleChange} />
        </label>
        <BooksList
          books={dataSource}
        />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
