import { Book } from './Book';
import { useEffect, useRef, useState } from 'react';
import { BookType } from './types';

export const BooksList = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [message, setMessage] = useState('');
  const [myBooks, setMyBooks] = useState<BookType[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('./data.json');
      const data: BookType[] = await response.json();

      setMyBooks(data);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

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
  }, [myBooks.length]);

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
    document.title = generateDocumentTitle(myBooks.length);
  }, [myBooks.length]);

  const handleRemoveBook = (id: number) => {
    const newBooksArray = myBooks.filter((book) => book.id !== id);

    setMyBooks(newBooksArray);
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

// BooksList.propTypes = {
//   books: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     publicationDate: PropTypes.string.isRequired,
//     category: PropTypes.oneOf(['crime', 'romance', 'biography']).isRequired,
//     related: PropTypes.arrayOf(PropTypes.string).isRequired,
//   })).isRequired,
// }
