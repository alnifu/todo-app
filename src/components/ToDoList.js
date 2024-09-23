import React, { useState } from 'react';
import TodoItem from './ToDoItem.js';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const completeTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: true } : todo
        );
        setTodos(updatedTodos);
    };

    const editTodo = (index, newText) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <div className='addtodo'>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add</button>
            </div>
            {todos.length === 0 ? (
                <p>No todos available. Add a todo to get started!</p>
            ) : (
                <ul>
                    {todos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            todo={todo}
                            completeTodo={() => completeTodo(index)}
                            editTodo={(newText) => editTodo(index, newText)}
                            removeTodo={() => removeTodo(index)}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodoList;
