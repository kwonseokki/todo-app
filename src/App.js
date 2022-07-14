import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useState, useRef } from 'react';
function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '리액트의 기초 알아보기',
      checked:true
    },
    {
      id:2,
      text: '몽고DB 공부하기',
      checked:true
    },
    {
      id:3,
      text: '깃허브 커밋하기',
      checked:false
    },
  ]);

  const nextId=useRef(4);

  const onInsert = useCallback(text=>{
    const todo = {
      id:nextId.current,
      text,
      checked:false
    };
    setTodos(todos.concat(todo));
    nextId.current +=1;
  },[todos]);

  const onRemove = useCallback(id=>{
    setTodos(todos.filter(todo=>todo.id !== id));
  }, [todos]);

  const onToggle = useCallback(id=>{
    setTodos(
      todos.map(todo=> 
        todo.id === id ? {...todo, checked:!todo.checked} :todo),
    );
  })
  return (
    <div className="App">
     Todo
     <TodoTemplate>Todo App을 만들자!
     <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
     </TodoTemplate>

    </div>
  );
}

export default App;
