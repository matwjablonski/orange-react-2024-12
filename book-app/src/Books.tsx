import { Book } from './Book';
import { Book as BookType } from './data';

type BooksProps = {
  books: BookType[];
}

export const BooksList = ({ books }: BooksProps) => {
  return (
    <ul>
      {books.map((book) => (<Book key={`${book.title}-${book.author}`} {...book} />))}
    </ul>
  )
}
