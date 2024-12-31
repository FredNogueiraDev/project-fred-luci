import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({isPrivate}: AuthGuardProps) {
  const signedIn = false; //NÃO ESTÁ LOGADO

  if(signedIn && !isPrivate) {
    return <Navigate to='/' replace />
  }

  if(!signedIn && isPrivate) {
    return <Navigate to='/login' replace/>
  }

  return <Outlet />
}
