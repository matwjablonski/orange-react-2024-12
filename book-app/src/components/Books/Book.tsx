import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { BookProps } from './types';
import { Button, ButtonReverse } from '../Button/Button';

export const Book = ({ title, author, publicationDate, id, onRemove }: BookProps) => {
  const [isRead, setIsRead] = useState(false);
  const [votes, setVotes] = useState(() => Math.floor(author.length * 2 / 5));

  const handleRead = () => {
    setIsRead((prevState) => !prevState);
  };

  const handleUpdateVotes = useCallback(() => {
    setVotes((prevState) => prevState + 1);
  }, []);

  const buttonStyles = useMemo(() => ({ backgroundColor: 'beige', color: 'darkblue' }), [votes]);

  return (
    <li>
      <div>
        {votes > 0 && <div>Liczba głosów: {votes}</div>}
        { isRead && <div><em>Przeczytana</em></div> }
        {title} by {author} ({publicationDate as string})
        <ButtonReverse type="button" onClick={handleRead}>{isRead ? 'Usuń z przeczytanych' : 'Dodaj do przeczytanych'}</ButtonReverse>
        <ButtonReverse size="big" type="button" onClick={handleUpdateVotes}>Głosuj na tę pozycję</ButtonReverse>
        <Button type="button" onClick={() => onRemove(id)}>Usuń</Button>    
      </div>
    </li>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
}
