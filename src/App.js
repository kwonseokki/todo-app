import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
function App() {
  return (
    <div className="App">
     Todo
     <TodoTemplate>Todo App을 만들자!</TodoTemplate>
    <TodoInsert/>
    </div>
  );
}

export default App;
