export type BookType = {
  title: string;
  author: string;
  publicationDate: string | Date;
  category: 'crime' | 'romance' | 'biography';
  related: string[];
  id: number;
};

export type BookProps = { 
  onRemove(id: number): void
} & Pick<BookType, 'author' | 'title' | 'publicationDate' | 'id'>;
