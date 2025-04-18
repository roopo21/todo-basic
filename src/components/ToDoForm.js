import React, {useState} from 'react';

const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
        
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="What's the task for today?" className="todo-input" value={value}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    );
    
}

export default ToDoForm;
