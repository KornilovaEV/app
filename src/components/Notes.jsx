import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'


const Notes = ({notes, onRemove}) => {

        return(<ul className="list-group">
            {notes.map(note => (
            <li className="list-group-item"
                key={note.id}>
                <div>
                <strong>{note.title}</strong>
                </div>
                <button type="button" 
                className="btn btn-outline-danger btn-sm note"
                onClick={() => onRemove(note.id)}
                >
                    &times;
                </button>
            </li>
            ))}
        </ul>)
}

export {Notes}
/*
    <TransitionGroup component="ul" className="list-group">
        {notes.map(note => (
        <CSSTransition
            key={note.id}
            classNames={'note'}
            timeout={800}
        >
            <li className="list-group-item note">
            <div>
                <strong>{note.title}</strong>
                <small>{note.date}</small>
            </div>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => onRemove(note.id)}
            >
                &times;
            </button>
            </li>
        </CSSTransition>
        ))}
    </TransitionGroup>
)*/