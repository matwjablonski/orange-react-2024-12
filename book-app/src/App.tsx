import React, { ChangeEvent, lazy, Suspense, useRef, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer, StyledFooter } from './components/Footer/Footer';
import { Readers } from './components/Readers/Readers';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home/Home';
import { BookDetails } from './components/BookDetails/BookDetails';
import { Container } from './components/Container/Container';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Modal } from './components/Modal/Modal';
import { User, UserContext } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { login, logout } from './store/UserSlice'

const BooksList = lazy(() => import('./components/Books/Books'))
const ContactForm = lazy(() => import('./components/Forms/ContactForm').then(module => ({ default: module.ContactForm })));

function App() {
  const [ values, setValues ] = useState({
    name: '',
    lastName: '',
  })
  const uncontrolledRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  const handleLogin = () => {
    if (currentUser.isLoggedIn) {
      dispatch(logout());
    } else {
      dispatch(login('Mateusz'));
    }
  }

  const handleUncontrolledChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    if (e.target.value.length > 5) {
      uncontrolledRef.current?.reset();
    }
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }

  return (
    <ThemeProvider>
      <div>
        <Modal isOpen={isModalOpen} handleClose={handleClose}>
          {currentUser ? <button type="button" onClick={handleLogin}>{currentUser.isLoggedIn ? 'Wyloguj' : 'Zaloguj'}</button> : null}
        </Modal>
        <button onClick={() => setIsModalOpen(true)}>Logowanie / Rejestracja</button>
        <Header name="Mateuszu" />
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
                <Route path="books" element={
                  <Suspense fallback={<div>Ładowanie widoku książek...</div>}>
                    <BooksList />
                  </Suspense>
                } />
                <Route
                  path="readers"
                  element={<ProtectedRoute isAuthorized={currentUser.isLoggedIn}><Readers /></ProtectedRoute>
                  }
                />
              </Route>

              <Route path="page">
                <Route path="contact" element={
                  <Suspense fallback={<div>Trwa ładownie formularza...</div>}>
                    <ContactForm />
                  </Suspense>}
                />
              </Route>
            </Routes>
          </Container>
        </main>
        <StyledFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
