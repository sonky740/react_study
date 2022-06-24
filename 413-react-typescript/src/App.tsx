import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContexProvider from './store/todos-contenxt';

const App = () => {
  return (
    <TodosContexProvider>
      <NewTodo />
      <Todos />
    </TodosContexProvider>
  );
};

export default App;
