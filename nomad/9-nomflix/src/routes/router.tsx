import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Main from '@/pages/Main';
import Tv from '@/pages/Tv';
import Search from '@/pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
        children: [
          {
            path: 'movies/:id',
            element: <Main />,
          },
        ],
      },
      {
        path: 'tv',
        element: <Tv />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
    errorElement: null,
  },
]);

export default router;
