import { Book as BookType } from '../../data';

export type BooksProps = {
  books: BookType[];
}

export type BookProps = { 
  onRemove(id: number): void
} & Pick<BookType, 'author' | 'title' | 'publicationDate' | 'id'>;
