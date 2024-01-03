import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function PublicRoute({ redirectTo, children }) {
  const location = useLocation();
  const isAuth = false

  return !isAuth ? (
    children
  ) : (
    <Navigate to={location.state ? location.state.from : redirectTo} />
  );
}