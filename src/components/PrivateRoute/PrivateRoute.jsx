import { Navigate, useLocation } from 'react-router-dom';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import { useEffect, useState } from 'react';

export default function PrivateRoute({ redirectTo, children }) {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(true)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && !isAuth) {
        setIsAuth(true)
      } else if (!user && isAuth) {
        setIsAuth(false)
      }
    })
  }, [isAuth]);

  return isAuth ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
}