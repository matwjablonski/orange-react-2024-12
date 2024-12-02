import { Book } from './Book';
import PropTypes from 'prop-types';
import { BooksProps } from './types';

export const BooksList = ({ books }: BooksProps) => {
  return (
    <ul>
      {books.map((book) => (<Book key={`${book.title}-${book.author}`} {...book} />))}
    </ul>
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
