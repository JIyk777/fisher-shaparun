import { Navigate, useLocation } from 'react-router-dom';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig';

export default function PrivateRoute({ redirectTo, children }) {
  const location = useLocation();
  const isAuth = onAuthStateChanged(auth, (user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  })

  return isAuth ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
}