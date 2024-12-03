import { PropsWithChildren, useEffect } from 'react';

export const User = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    return () => {
      console.log('User component unmount');
    }
  }, []);

  return (
    <div>
      {children}
    </div>
  );
}
