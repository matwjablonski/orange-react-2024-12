import React from 'react';
import { Test } from './Test';

function App() {
  return (
    <div>
      <header>Witaj w naszej aplikacji książkowej</header>
      <Test address="dasd" />
      <main>
        <ul>
          <li>W pustyni i w puszczy</li>
          <li>Hyperion</li>
          <li>Mistrz czystego kodu</li>
        </ul>
      </main>
      <footer>Aplikacja przygotowana przez Mateusza Jabłońskiego</footer>
    </div>
  );
}

export default App;
