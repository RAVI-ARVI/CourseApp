import { Suspense, lazy } from 'react';
const Home = lazy(() => import('../components/Home'));

export const mainRoutes = [
  {
    element: (
      <Suspense fallback={<h1>loading... </h1>}>
        <Home />
      </Suspense>
    ),
    path: '/',
  },
];
