import { Suspense, lazy } from 'react';
import Header from '../components/Layout/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer/Footer';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ForgetPassword from '../components/Auth/ForgetPassword';
import ResetPassword from '../components/Auth/ResetPassword';

const Home = lazy(() => import('../components/Home'));
const Courses = lazy(() => import('../components/Courses'));
const Contact = lazy(() => import('../components/Contact'));
const Request = lazy(() => import('../components/Request'));

export const mainRoutes = [
  {
    element: <AppLayout />,
    path: '/',
    children: [
      {
        element: (
          <Suspense fallback={<h1>loading... </h1>}>
            <Home />
          </Suspense>
        ),
        path: '/',
      },
      {
        path: '/courses',
        element: (
          <Suspense fallback={<h1>loading... </h1>}>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<h1>loading... </h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/request',
        element: (
          <Suspense fallback={<h1>loading.........</h1>}>
            <Request />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/forgetpassword',
        element: <ForgetPassword />,
      },
      {
        path: '/resetpassword/:token',
        element: <ResetPassword />,
      },
    ],
  },
];

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
