import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import RegistrationForm from './pages/Registration/RegistrationForm';
import Home from './pages/Home/Home';
import EntryForm from './pages/EntryForm/EntryForm';
import SuccessRegistration from './pages/SuccesRegistration/SuccessRegistration';

const routers = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/about-me',
    element: <AboutMe />,
  },
  {
    path: '/registration-form',
    element: <RegistrationForm />,
  },
  {
    path: '/entry-form',
    element: <EntryForm />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/completed-registration',
    element: <SuccessRegistration />,
  },
]);

export default routers;
