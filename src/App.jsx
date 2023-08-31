import './App.css';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, body: 'Learn JS', completed: false},
    { id: 2, body: 'Learn HTML', completed: false},
    { id: 3, body: 'Learn CSS', completed: false},
    { id: 4, body: 'Learn React', completed: false},
  ]);

  const addTodo = body => {
    const id = todos[todos.length -1].id + 1;
    setTodos([...todos, {id, body, completed: false}])
  }

  const deleteTodo = id => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    )
  }



  const toggleCompleted = id => {
    setTodos(
      todos.map( todo => {
        if (id === todo.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    )
  }
  

  return (
    <div className="container">
      <h1>Todo Appt</h1>
      
      <AddTodo
      addTodo={ addTodo }/>

      <div className="todos mt-20">
        <TodoList 
        todos={ todos }
        setTodos={ setTodos }
        toggleCompleted={ toggleCompleted }
        deleteTodo={ deleteTodo }
        
        
        />
      </div>
    
    </div>
  );
}

export default App;
