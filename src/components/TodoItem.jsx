import { useState } from 'react';

const TodoItem = ({ todo, index, toggleCompleted, deleteTodo, setTodos, todos }) => {
    const { id, body, completed } = todo;
    
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');

    function editTodo (id, body)  {
        setEdit(id);
        setValue(body)
    }

    function saveTodo(id) {
        let newTodo = [...todos].map(todo => {
            if(todo.id == id) {
                todo.body = value
            }
            return todo
        })
        setTodos(newTodo)
        setEdit(null)
    }

    return (
        <li className={`todo-item ${completed ? 'todo-item__checked' : ''}`}>
            <input
            onChange={ () => toggleCompleted(id)} 
                checked={ completed } 
                className="mr-10 todo-item__complited"
                type="checkbox"
            />
            
            <span className='mr-10 todo-item__number'>{ index + 1}</span>
            {
                edit == id ? 
                <div className='edit-form'>
                    <input onChange={(e)=> setValue(e.target.value)}value={value}/> 
                </div>
                    : 
                <p className='todo-item__text'>{ body}</p>
    
            }
            {
                edit == id ?
                <div>
                    <button onClick={() => saveTodo(id)}>Save</button>
                </div> 
                :
                <div className="user-action">
                    <button onClick={() => editTodo(id, body)} className="btn-icon user-action__edit">//</button>
                    <button onClick={() => deleteTodo(id)} className='btn-icon user-action__del'>Х</button>
                </div>
            }

        </li>
    );
};
 
export default TodoItem;
