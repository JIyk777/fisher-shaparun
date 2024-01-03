import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ redirectTo, children }) {
  const location = useLocation();
  const isAuth = false;

  return isAuth ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
}