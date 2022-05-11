import React from 'react';


const Notes = ({notes, }) => {
    return (
        <ul className="list-group">
            {notes.map(note => (
            <li className="list-group-item"
                key={note.id}>
                    
                <strong>{note.title}</strong>
                <button type="button" 
                className="btn btn-outline-danger btn-sm note"
                //onClick={() => onRemove(note.id)}
                >
                    &times;
                </button>
            </li>
            ))}
        </ul>
    )
}

export {Notes}