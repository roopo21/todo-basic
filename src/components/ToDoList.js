import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoForm from "./ToDoForm";
import ToDoItem from './ToDoItem';
import ToDoItemEdit from './ToDoItemEdit';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos);
    }
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed} : todo));
    }

    const deleteTask = id => {
        setTodos(todos.filter( task => task.id !== id));
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing} : todo));
    }

    const updateTodo = (id, task) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: false} : todo));
    }
    return (
        <div className="TodoWrapper">
        <ToDoForm addTodo = {addTodo}/>
        {todos.map((todo, index) => (
            todo.isEditing ? (<ToDoItemEdit updateTodo={updateTodo} task={todo}/>) :
            (<ToDoItem task={todo} key={index} toggleComplete={toggleComplete} deleteTask={deleteTask} editTodo={editTodo}/>)
        ))}
        </div>
    );
}

export default ToDoList;