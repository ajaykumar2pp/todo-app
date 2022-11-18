import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className='App mt-3 mb-3'>
     <h1 >Todo-App</h1>
     <TodoApp />
    </div>
  );
}

export default App;
