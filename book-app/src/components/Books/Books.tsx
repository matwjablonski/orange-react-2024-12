import { Book } from './Book';
import { useEffect, useRef, useState, useTransition } from 'react';
import { BookType } from './types';
import { useRequest } from '../../hooks/useRequest';

const BooksList = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [message, setMessage] = useState('');
  const [myBooks, setMyBooks] = useState<BookType[]>([]);
  const { isLoading, data, error } = useRequest('/data.json', true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setMyBooks(data);
  }, [data]);

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

    startTransition(() => {
      setMyBooks(newBooksArray)
    })
  }

  if (isLoading) {
    return <p>Trwa ładowanie danych...</p>
  }

  if (error) {
    return <p>Wystąpił błąd: {error.message}</p>
  }

  return (
    <div>
      {isPending && <p>Trwa aktualizacja danych...</p>}
      {message && <p>{message}</p>}
      <ul ref={listRef}>
        {myBooks.length && myBooks.map((book) => (<Book key={`${book.title}-${book.author}`} {...book} onRemove={handleRemoveBook} />))}
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

export default BooksList;
