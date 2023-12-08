import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import NotFoundPage from '../pages/NotFoundPage';
import EventsRoot from '../pages/EventsRoot';
import EventsPage from '../pages/EventsPage';
import EventDetailPage from '../pages/EventDetailPage';
import NewEventPage from '../pages/NewEventPage';
import EditEventPage from '../pages/EditEventPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: 'new',
            element: <NewEventPage />,
          },
          {
            path: ':eventId',
            element: <EventDetailPage />,
          },
          {
            path: ':eventId/edit',
            element: <EditEventPage />,
          },
        ],
      },

      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
