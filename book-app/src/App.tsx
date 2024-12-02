import React from 'react';
import { books } from './data';
import { Books } from './Books';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Books
          books={books}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
