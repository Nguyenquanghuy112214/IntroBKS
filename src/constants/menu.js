import { routePath } from '~/routing/pathRouting';
export const listMenu = [
  {
    id: 1,
    name: 'Home',
    link: routePath.HomePage,
  },
  {
    id: 2,
    name: 'About us',
    link: routePath.About,
  },
  {
    id: 3,
    name: 'News',
    link: routePath.News,
  },
  {
    id: 4,
    name: 'Services',
    link: routePath.Services,
    chidrent: [
      {
        name: 'Hello',
        link: '/',
      },
      {
        name: 'Services2',
        link: '/',
      },
      {
        name: 'Services3',
        link: '/',
      },
      {
        name: 'Services4',
        link: '/',
      },
    ],
  },
  {
    id: 5,
    name: 'Pages',
    link: routePath.Page,
    chidrent: [
      {
        name: 'Pages1',
        link: '/',
      },
      {
        name: 'Pages2',
        link: '/',
      },
      {
        name: 'Pages3',
        link: '/',
      },
      {
        name: 'Pages4',
        link: '/',
      },
    ],
  },
  {
    id: 6,
    name: 'Team',
    link: routePath.Team,
  },
];
