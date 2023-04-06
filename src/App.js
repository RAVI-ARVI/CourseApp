import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { mainRoutes } from './routes/main';

function App() {
  const app = createBrowserRouter(mainRoutes);

  return <RouterProvider router={app} />;
}

export default App;
