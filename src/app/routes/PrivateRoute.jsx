import { Navigate } from 'react-router-dom'

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
}

export const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />
}