import { Book } from './Book';
import PropTypes from 'prop-types';
import { BooksProps } from './types';
import { useEffect, useId, useRef, useState } from 'react';

export const BooksList = ({ books }: BooksProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [message, setMessage] = useState('');
  const [myBooks, setMyBooks] = useState(books);

  useEffect(() => {
    setMyBooks(books);
  }, [books]);

  const filterBooks = (category: 'crime' | 'romance' | 'biography') => {
    const newBooksArray = myBooks.filter((book) => book.category === category);
  
    setMyBooks(newBooksArray);
  }

  useEffect(() => {
    if (listRef.current) {
      const { height } = listRef.current.getBoundingClientRect();
      
      if (height > 600) {
        setMessage('Masz masę książek');
      } else {
        setMessage('Zbieraj dalej');
      }
    }
  }, []);

  const generateDocumentTitle = (booksLength: number): string => {
    let bookInfo = '';

    if (booksLength === 1) {
      bookInfo = '1 książkę';
    }

    if (booksLength > 1 && booksLength < 5) {
      bookInfo = `${booksLength} książki`;
    }

    if (booksLength > 4) {
      bookInfo = `${booksLength} książek`;
    }

    return `Twój zbiór książek liczy ${bookInfo}`;
  }

  useEffect(() => {
    document.title = generateDocumentTitle(books.length);
  }, [books.length]);

  const handleRemoveBook = (id: number) => {

  }

  return (
    <div>
      {message && <p>{message}</p>}
      <ul ref={listRef}>
        {myBooks.map((book) => (<Book key={`${book.title}-${book.author}`} {...book} onRemove={handleRemoveBook} />))}
      </ul>
    </div>
  )
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
    category: PropTypes.oneOf(['crime', 'romance', 'biography']).isRequired,
    related: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
}
