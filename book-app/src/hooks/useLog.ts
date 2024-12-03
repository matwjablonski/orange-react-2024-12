import { useState } from 'react';

const useLog = () => {
  const [count, setCount] = useState(0);
  
  const log = (message: string) => {
    setCount((prev) => prev + 1);
    console.log(`Logging from app [${count}]:`, message);
  };

  return { log };
}

export default useLog;
