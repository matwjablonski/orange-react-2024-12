import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router';

type ProtectedRouteProps = {
  isAuthorized: boolean;
}

export const ProtectedRoute = ({ children, isAuthorized }: PropsWithChildren<ProtectedRouteProps>) => {

  if (!isAuthorized) {
    
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
