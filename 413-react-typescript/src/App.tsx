import Todos from './components/Todos';
import './App.css';

const App = () => {
  return (
    <div>
      <Todos items={['Learn React', 'Learn TypesScript']} />
    </div>
  );
}

export default App;
