import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const ToDoItem = ({task, toggleComplete, deleteTask, editTodo}) => {
    return (
        <div className={`${task.completed ? ' Todo completed' : 'Todo incompleted'}`} >
            <p onClick={() => toggleComplete(task.id)}> {task.task} </p>
            <div>
                <FontAwesomeIcon icon = {faPenToSquare} onClick={() => editTodo(task.id) }/>
                <FontAwesomeIcon icon = {faTrash} onClick={() => deleteTask(task.id)}/>

            </div>
        </div>
    );
}

export default ToDoItem;
