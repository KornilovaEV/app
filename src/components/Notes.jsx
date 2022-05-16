import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const Notes = ({notes, onRemove}) => (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
                
                <CSSTransition
                key={note.id}
                classNames={'note'}
                timeout={800}
                >

                <li className="list-group-item note">
                    
                <strong>{note.title}</strong>

                <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton 
                aria-label="delete" 
                size="large"
                style={{
                    background: 'none'
                }}
                >
                    <DeleteIcon 
                    fontSize="inherit"
                    onClick={() => onRemove(note.id)} />
                </IconButton>
                </Stack>

            </li>
            </CSSTransition>
            ))}
        </TransitionGroup>
    

)