import React, { ChangeEvent, useRef, useState } from 'react';
import { books as dataSource } from './data';
import { BooksList } from './components/Books';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ContactForm } from './components/Forms/ContactForm';

function App() {
  const [ values, setValues ] = useState({
    name: '',
    lastName: '',
  })
  const uncontrolledRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  const handleUncontrolledChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    if (e.target.value.length > 5) {
      uncontrolledRef.current?.reset();
    }
  }

  return (
    <div>
      <Header name="Mateuszu" onLogin={() => alert('zalogowano!')} />
      <main>
        <form ref={uncontrolledRef}>
        <label>
          Pole niekontrolowane:
          <input onChange={handleUncontrolledChange}/>
        </label>
        </form>
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
