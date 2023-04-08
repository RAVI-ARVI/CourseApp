import { Suspense, lazy } from 'react';
import Header from '../components/Layout/Header/Header';
import { Outlet } from 'react-router-dom';

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
    ],
  },
];

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
