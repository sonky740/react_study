import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Framer from '@/pages/Framer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Framer />,
      },
    ],
    errorElement: null,
  },
]);

export default router;
