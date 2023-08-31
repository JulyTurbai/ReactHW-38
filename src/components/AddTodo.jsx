import { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [body, setBody] = useState('');

    const clickBtnHandler = (text) => {
        addTodo(text);
        setBody('');
    }

    return (
        <div className="add-todo">
            
            <input  
                onChange={ (e) => setBody(e.target.value)}
                value={ body }
                className="add-todo__input" 
                type="text" 
                placeholder='enter todo text...'
            />

            <button 
                onClick={() => clickBtnHandler( body )}
                className='add-todo__btn'>
                add todo
            </button>
      </div>
    );
};

export default AddTodo;