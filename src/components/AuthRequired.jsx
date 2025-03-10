import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const authenticated = false;

  if (!authenticated) {
    return (
      <Navigate to="/login" state={{ message: 'You must log in first' }}/>
    )
  }

  return <Outlet />
}