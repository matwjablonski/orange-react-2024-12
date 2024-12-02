import { PropsWithChildren } from 'react';

export const User = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
    </div>
  );
}
