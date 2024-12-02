import { useState } from 'react';
import { Book as BookType } from './data'

type BookProps = {} & Pick<BookType, 'author' | 'title' | 'publicationDate'>;

export const Book = ({ title, author, publicationDate }: BookProps) => {
  const [isRead, setIsRead] = useState(false);

  const handleRead = () => {
    setIsRead((prevState) => !prevState);
  };

  const buttonStyles = { backgroundColor: 'beige', color: 'darkblue' };

  return (
    <li>
      <div>
        { isRead && <div><em>Przeczytana</em></div> }
        {title} by {author} ({publicationDate as string})
        <button type="button" style={buttonStyles} onClick={handleRead}>{isRead ? 'Usuń z przeczytanych' : 'Dodaj do przeczytanych'}</button>
      </div>
    </li>
  )
}
