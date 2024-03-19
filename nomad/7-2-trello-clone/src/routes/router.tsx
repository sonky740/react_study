import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import DragApp from '@/pages/DragApp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <DragApp />,
      },
    ],
    errorElement: null,
  },
]);

export default router;
