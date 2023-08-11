import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { mainRoutes } from './routes/main';

function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });

  const app = createBrowserRouter(mainRoutes);

  return <RouterProvider router={app} />;
}

export default App;
