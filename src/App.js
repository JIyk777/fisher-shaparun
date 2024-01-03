import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('pages/login/LoginPage'));
const HomePage = lazy (() => import('pages/homePage/HomePage'));
const RegisterPage = lazy(() => import('pages/register/RegisterPage'));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        {/* Інші маршрути */}
      </Routes>
    </Suspense>
  );
}

export default App;
