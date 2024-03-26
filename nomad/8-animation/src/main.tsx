import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { darkTheme } from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </RecoilRoot>
);
