import React, {Fragment, useContext} from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { DatabaseContext } from '../database/databaseContext'
import { Loader } from '../components/Loader'
import { useAuth } from '../hook/useAuth';

export const UserPage = () => {
    const {id} = useAuth();
    const {loading, notes, removeNote} = useContext(DatabaseContext)
    
    
    return (
        <div>
            <h1>Your page! </h1>
            <Form />
            <hr/>
            {loading
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote}/>
        }
    
    
        </div>
        

    )
}
