import { useEffect, useState } from 'react';
import { Reader } from './types';
import useLog from '../../hooks/useLog';

export const Readers = () => {
  const [readers, setReaders] = useState<Reader[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [readersAreVisible, setReadersAreVisible] = useState(false);
  const { log } = useLog();

  const fetchReaders = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: Reader[] = await response.json();

      setTimeout(() => {
        setReaders(data);
        setIsLoading(false);
        log('Pobrano czytelników');
      }, 2000);
      
    } catch (error) {}
  }

  useEffect(() => {
    fetchReaders();
  }, [])

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
