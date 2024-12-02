import React from 'react';
import { books as dataSource } from './data';
import { BooksList } from './Books';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <BooksList
          books={dataSource}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
