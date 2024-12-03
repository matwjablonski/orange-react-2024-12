import { Link } from 'react-router';

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/app">Home</Link>
      </li>
      <li>
        <Link to="/app/books">Książki</Link>
      </li>
      <li>
        <Link to="/app/readers">Czytelnicy</Link>
      </li>
      <li>
        <Link to="/page/contact">Kontakt</Link>
      </li>
    </ul>
  </nav>
)
