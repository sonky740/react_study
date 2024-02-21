import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
