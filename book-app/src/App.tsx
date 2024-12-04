import React, { ChangeEvent, useRef, useState } from 'react';
import { BooksList } from './components/Books';
import { Header } from './components/Header/Header';
import { Footer, StyledFooter } from './components/Footer/Footer';
import { ContactForm } from './components/Forms/ContactForm';
import { Readers } from './components/Readers/Readers';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home/Home';
import { BookDetails } from './components/BookDetails/BookDetails';
import { Container } from './components/Container/Container';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const [ values, setValues ] = useState({
    name: '',
    lastName: '',
  })
  const uncontrolledRef = useRef<HTMLFormElement>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  const handleLogin = () => {
    console.log('zalogowano!')
    setIsUserLoggedIn(true);
  }

  const handleUncontrolledChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    if (e.target.value.length > 5) {
      uncontrolledRef.current?.reset();
    }
  }

  return (
    <div>
      <Header name="Mateuszu" onLogin={handleLogin} isUserLoggedIn={isUserLoggedIn} />
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
        <Container>
          <Routes>
            <Route path="app">
              <Route index element={<Home />} />
              <Route path="books" element={<BooksList />} />
              <Route
                path="readers"
                element={
                  <ProtectedRoute isAuthorized={isUserLoggedIn}><Readers /></ProtectedRoute>
                }
              />
            </Route>

            <Route path="page">
              <Route path="contact" element={<ContactForm />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <StyledFooter />
    </div>
  );
}

export default App;
