import { useState } from 'react';
import TodoForm from './components/TodoForm.js';
import Todo from './types/Todo.js';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos((prev) => [
      //immutable update!
      //creating a new array with a new object in it!
      ...prev,
      {
      id:Date.now(),
      content:newTodo,
      done:false,
      },
    ]);
    //setTodos((prev) => {
      //1.create a copy
      //const todosCopy = prev.slice();
      //const todosCopy = [...prev];
      //2.modify the copy
      //todosCopy.push({
      //id.Date.now(),
      //content: newTodo,
      //done: false,
      //});
      //3.return the copy 
      //return todosCopy;
      //})
  }

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) 
  };

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li onClick={() => removeTodo(todo.id)} key={todo.id}> 
          {todo.content} 
          </li>
        ))}
      </ul>
    </div>
  );
}



export default App