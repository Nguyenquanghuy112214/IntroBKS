// Layout
import { lazy } from 'react';
import { routePath } from './pathRouting';

const configRoutes = [
  {
    path: routePath.HomePage,
    element: lazy(() => import('~/pages/HomePage/HomePage')),
    icons: '',
    name: 'Home',
    hiddenMenu: false,
  },
  {
    path: routePath.AboutPage,
    element: lazy(() => import('~/pages/AboutPage/AboutPage')),
    icons: '',
    name: 'About',
    hiddenMenu: false,
    layout: 'navigation',
    title: 'About Us',
    btn: 'About',
  },
  {
    path: routePath.NewsPage,
    element: lazy(() => import('~/pages/NewsPage/NewsPage')),
    icons: '',
    name: 'News',
    hiddenMenu: false,
    layout: 'navigation',
    title: 'Six Column',
    btn: 'Blog',
  },
  {
    path: routePath.TeamPage,
    element: lazy(() => import('~/pages/TeamPage/TeamPage')),
    icons: '',
    name: 'Team',
    hiddenMenu: false,
    layout: 'navigation',
    title: 'Our Team',
    btn: 'Team',
  },


  {
    path: routePath.Services,
    element: lazy(() => import('~/pages/ServicesPage/ServicesPage')),
    icons: '',
    name: 'Services',
    hiddenMenu: false,
    layout: 'navigation',
  },


  // Not Found
  {
    path: '*',
    element: lazy(() => import('~/pages/NotFound/NotFound')),
    hiddenMenu: true,
  },
];

export default configRoutes;
