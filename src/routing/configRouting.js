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
    path: routePath.About,
    element: lazy(() => import('~/pages/AboutPage/AboutPage')),
    icons: '',
    name: 'About',
    hiddenMenu: false,
    layout: 'navigation',
  },
  {
    path: routePath.News,
    element: lazy(() => import('~/pages/NewsPage/NewsPage')),
    icons: '',
    name: 'News',
    hiddenMenu: false,
    layout: 'navigation',
  },
  {
    path: routePath.Page,
    element: lazy(() => import('~/pages/PagesPage/PagesPage')),
    icons: '',
    name: 'News',
    hiddenMenu: false,
    layout: 'navigation',
  },
  {
    path: routePath.Services,
    element: lazy(() => import('~/pages/ServicesPage/ServicesPage')),
    icons: '',
    name: 'Services',
    hiddenMenu: false,
    layout: 'navigation',
  },
  {
    path: routePath.Team,
    element: lazy(() => import('~/pages/TeamPage/TeamPage')),
    icons: '',
    name: 'Team',
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
