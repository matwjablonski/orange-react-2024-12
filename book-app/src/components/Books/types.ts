import { Book as BookType } from '../../data';

export type BooksProps = {
  books: BookType[];
}

export type BookProps = {} & Pick<BookType, 'author' | 'title' | 'publicationDate'>;
