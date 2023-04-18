import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AboutMe from './pages/AboutMe/AboutMe';
import Posts from './pages/Posts/Posts';
import RegistrationForm from './pages/Registration/RegistrationForm';
import Home from './pages/Home/Home';
import EntryForm from './pages/EntryForm/EntryForm';
import SuccessRegistration from './pages/SuccesRegistration/SuccessRegistration';
import Entries from './pages/Entries/Entries';

const routers = createBrowserRouter([
  {
    path: '/posts',
    element: <Posts />,
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
  {
    path: '/entries',
    element: <Entries />,
  },
]);

export default routers;
