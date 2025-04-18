import React, {useState} from 'react';

const ToDoItemEdit = ({updateTodo, task}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTodo(task.id, value);
        setValue("");
        
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input onChange={(e) => setValue(e.target.value)} type="text" placeholder={task.task} className="todo-input" value={value}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    );
    
}

export default ToDoItemEdit;
