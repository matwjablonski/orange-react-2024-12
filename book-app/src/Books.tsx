import { Book } from './Book';
import { Book as BookType } from './data';

type BooksProps = {
  books: BookType[];
}

export const Books = ({ books }: BooksProps) => {
  return (
    <ul>
      {books.map(book => (<Book {...book} />))}
    </ul>
  )
}
