import { createBrowserRouter } from 'react-router-dom';
import BaseLyaout from './layouts/BaseLyaout';
import { MainPage } from '@/pages/main';
import { NewsPage } from '@/pages/news';

export const appRoter = createBrowserRouter([
  {
    element: <BaseLyaout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/news/:id',
        element: <NewsPage />,
      },
    ],
  },
]);
