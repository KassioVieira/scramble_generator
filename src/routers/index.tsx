import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../page/Home';
import Invert from '../page/Invert';
import Start from '../page/Start';

const Routers = () => {
  const routes = useRoutes([
    { path: '/', element: <Start /> },
    { path: '/invert', element: <Invert /> },
    { path: 'timer', element: <Home /> }
  ]);

  return routes;
};

export default Routers;
