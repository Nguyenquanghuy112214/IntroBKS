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
    path: routePath.QDTS,
    element: lazy(() => import('~/pages/QDTSPage/QDTSPage')),
    icons: '',
    name: 'QUY ĐỊNH TUYỂN SINH',
    hiddenMenu: false,
    layout:'navigation'

  },
  {
    path: routePath.TTTS,
    element: lazy(() => import('~/pages/TTTSPage/TTTSPage')),
    icons: '',
    name: 'THÔNG TIN TUYỂN SINH',
    hiddenMenu: false,
    layout:'navigation'
  },
  {
    path: routePath.DKTS,
    element: lazy(() => import('~/pages/DKTSPage/DKTSPage')),
    icons: '',
    name: 'ĐĂNG KÝ TUYỂN SINH',
    hiddenMenu: false,
    layout:'navigation'
  },
  {
    path: routePath.TCKQ,
    element: lazy(() => import('~/pages/TCKQPage/TCKQPage')),
    icons: '',
    name: 'TRA CỨU KẾT QUẢ',
    hiddenMenu: false,
    layout:'navigation'
  },
  {
    path: routePath.HDDK,
    element: lazy(() => import('~/pages/HDDKPage/HDDKPage')),
    icons: '',
    name: 'HƯỚNG DẪN ĐĂNG KÝ',
    hiddenMenu: false,
    layout:'navigation'
  },
  {
    path: routePath.TCDT,
    element: lazy(() => import('~/pages/TCDTPage/TTTSPage')),
    icons: '',
    name: 'TRA CỨU ĐIỂM THI VÀO 10',
    hiddenMenu: false,
    layout:'navigation'
  },

  // Not Found
  {
    path: '*',
    element: lazy(() => import('~/pages/NotFound/NotFound')),
    hiddenMenu: true,
  },
];

export default configRoutes;
