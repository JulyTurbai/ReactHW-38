import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCompleted, deleteTodo, setTodos }) => {
    return (
        <>
            <h2>Todo list</h2>
            <ul className='todo-list mt-20'>

                {
                    todos.map( (todo, index) => 
                    <TodoItem 
                    key={ todo.id }
                    todo={ todo } 
                    index={ index }
                    toggleCompleted={ toggleCompleted }
                    deleteTodo={ deleteTodo }
                    setTodos={ setTodos }
                    todos={ todos  }
                    
                    />
                    )
                }
            </ul>
        </>
    );
};

export default TodoList;