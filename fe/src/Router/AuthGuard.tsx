import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({isPrivate}: AuthGuardProps) {
  const signedIn = localStorage.getItem("loggedIn") === "true"; // SIMULAÇÃO DE LOGIN!!!

  if(signedIn && !isPrivate) {
    return <Navigate to='/' replace />
  }

  if(!signedIn && isPrivate) {
    return <Navigate to='/login' replace/>
  }

  return <Outlet />
}
