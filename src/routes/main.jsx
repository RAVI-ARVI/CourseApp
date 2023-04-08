import { Suspense, lazy } from 'react';
import Header from '../components/Layout/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer/Footer';
import Login from '../components/Auth/Login';

const Home = lazy(() => import('../components/Home'));
const Courses = lazy(() => import('../components/Courses'));

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
        path: '/login',
        element: <Login />,
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
