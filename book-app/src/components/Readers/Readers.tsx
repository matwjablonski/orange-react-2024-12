import { useState } from 'react';
import { Reader } from './types';
import useLog from '../../hooks/useLog';
import { useRequest } from '../../hooks/useRequest';

export const Readers = () => {
  const [readersAreVisible, setReadersAreVisible] = useState(false);
  const { log } = useLog();
  const { isLoading, data: readers, error } = useRequest<Reader[]>('users');

  const handleSwitchReadersVisibility = () => {
    setReadersAreVisible((prev) => !prev);

    log('Zmiana widoczności czytelników');
  }

  return isLoading ? (
    <p>Trwa ładownaie danych</p>
  ) : (
    <div>
      <header>W aplikacji mamy: {readers.length} czytelników</header>
      <button type="button" onClick={handleSwitchReadersVisibility}>Pokaż / Ukryj czytelników</button>
      {readersAreVisible && <div>
        {readers.map((reader) => (
          <div key={reader.id}>
            <p>{reader.name}</p>
            <p>{reader.email} / {reader.phone}</p>
          </div>
        ))}
      </div>}
    </div>
  )
}
