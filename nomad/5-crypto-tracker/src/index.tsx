import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
