import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig';

export default function PublicRoute({ redirectTo, children }) {
  const location = useLocation();
  const isAuth = onAuthStateChanged(auth, (user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  })

    return !isAuth ? (
    children
  ) : (
    <Navigate to={location.state ? location.state.from : redirectTo} />
  );
}