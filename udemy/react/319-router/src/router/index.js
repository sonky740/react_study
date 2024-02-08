import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
} from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import NotFound from '../pages/NotFound';
import ErrorPage from '../pages/ErrorPage';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//     <Route path="*" element={<NotFound />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // index: true is the same as path: ''
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
        // children: [
        //   {
        //     path: 'products:productId',
        //     element: <ProductDetail />,
        //   },
        // ],
      },
      {
        path: 'products/:productId',
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
