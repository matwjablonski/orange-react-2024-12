import { Book } from './Book';
import PropTypes from 'prop-types';
import { BooksProps } from './types';
import { useEffect, useRef, useState } from 'react';

export const BooksList = ({ books }: BooksProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [message, setMessage] = useState('');

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

  return (
    <div>
      {message && <p>{message}</p>}
      <ul ref={listRef}>
        {books.map((book) => (<Book key={`${book.title}-${book.author}`} {...book} />))}
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
