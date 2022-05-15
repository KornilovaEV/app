import React, {Fragment, useContext} from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { DatabaseContext } from '../database/databaseContext'
import { Loader } from '../components/Loader'
import { useAuth } from '../hook/useAuth';


export const UserPage = () => {
    const {id} = useAuth();
    console.log(id)    
    return (
        <div>
            <h1>Your page! </h1>
            
        </div>
        

    )
}
