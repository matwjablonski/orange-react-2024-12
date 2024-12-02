import { Book as BookType } from './data'

type BookProps = {} & Pick<BookType, 'author' | 'title' | 'publicationDate'>;

export const Book = ({ title, author, publicationDate }: BookProps) => {
  return (
    <li>
      {title} by {author} ({publicationDate as string})
    </li>
  )
}
