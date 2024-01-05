import { Navigate, useLocation } from 'react-router-dom';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import { useEffect, useState } from 'react';

export default function PublicRoute({ redirectTo, children }) {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && !isAuth) {
        setIsAuth(true)
      } else if (!user && isAuth) {
        setIsAuth(false);
      }
    })
  });

    return !isAuth ? (
    children
  ) : (
    <Navigate to={location.state ? location.state.from : redirectTo} />
  );
}