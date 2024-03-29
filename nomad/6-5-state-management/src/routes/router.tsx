import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import ToDoList from '@/pages/TodoList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <ToDoList />,
      },
    ],
    errorElement: null,
  },
]);

export default router;
