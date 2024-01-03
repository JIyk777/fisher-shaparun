import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const Login = lazy(() => import('./pages/login/LoginPage'));
const HomePage = lazy (() => import('./pages/homePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/register/RegisterPage'));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<PrivateRoute redirectTo="/login" children={<HomePage />} />} />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/" children={<Login />} />}
        />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
