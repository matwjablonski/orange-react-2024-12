import { useState } from 'react';
import PropTypes from 'prop-types';
import { BookProps } from './types';

export const Book = ({ title, author, publicationDate }: BookProps) => {
  const [isRead, setIsRead] = useState(false);
  const [votes, setVotes] = useState(() => Math.floor(author.length * 2 / 5));

  const handleRead = () => {
    setIsRead((prevState) => !prevState);
  };

  const handleUpdateVotes = () => {
    setVotes((prevState) => prevState + 1);
  }

  const buttonStyles = { backgroundColor: 'beige', color: 'darkblue' };

  return (
    <li>
      <div>
        {votes > 0 && <div>Liczba głosów: {votes}</div>}
        { isRead && <div><em>Przeczytana</em></div> }
        {title} by {author} ({publicationDate as string})
        <button type="button" style={buttonStyles} onClick={handleRead}>{isRead ? 'Usuń z przeczytanych' : 'Dodaj do przeczytanych'}</button>
        <button type="button" onClick={handleUpdateVotes}>Głosuj na tę pozycję</button>      
      </div>
    </li>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
}
