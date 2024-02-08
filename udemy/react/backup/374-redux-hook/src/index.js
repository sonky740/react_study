import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProductsStore from './hooks-store/products-store';

const container = document.getElementById('root');
const root = createRoot(container);

configureProductsStore();

root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);