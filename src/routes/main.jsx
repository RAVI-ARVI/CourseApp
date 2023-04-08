import { Suspense, lazy } from 'react';
import Header from '../components/Layout/Header/Header';
import { Outlet } from 'react-router-dom';
const Home = lazy(() => import('../components/Home'));

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
