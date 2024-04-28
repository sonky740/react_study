import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
