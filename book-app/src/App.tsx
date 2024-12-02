import React, { ChangeEvent, useState } from 'react';
import { books as dataSource } from './data';
import { BooksList } from './Books';
import { Header } from './Header';
import { Footer } from './Footer';

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
      <Footer />
    </div>
  );
}

export default App;
