import React, { useState } from 'react';

function TodoItem({ todo, completeTodo, editTodo, removeTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        editTodo(editText);
        setIsEditing(false);
    };

    return (
        <li >
            {isEditing ? (
                <>
                    <input
                        className='modinput'
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button className='modbutton' onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <div className='hoverItem' onClick={completeTodo} disabled={todo.completed} ><button style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >{todo.text}</button></div>
                    <div>
                    <button className='modbutton' onClick={() => setIsEditing(true)} disabled={todo.completed}>
                        Edit
                    </button>
                    <button className='modbutton' onClick={removeTodo} disabled={todo.completed}>Remove</button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TodoItem;
