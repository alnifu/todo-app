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
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={completeTodo} disabled={todo.completed}>{todo.text}</p>
                    <div>
                    <button onClick={() => setIsEditing(true)} disabled={todo.completed}>
                        Edit
                    </button>
                    <button onClick={removeTodo} disabled={todo.completed}>Remove</button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TodoItem;
