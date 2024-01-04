import React, { useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig';

export default function PrivateRoute({ redirectTo, children }) {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(true)
    }
  });

  return isAuth ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
}