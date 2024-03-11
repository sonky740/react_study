import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>Crypto Tracker</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"
        />
      </Helmet>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
