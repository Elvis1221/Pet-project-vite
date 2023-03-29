import React from 'react';
import { RouterProvider } from 'react-router-dom';

import routers from './routes';

import css from './App.module.css';

function App() {
  return (
    <div className={css.App}>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
