
import {Navigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import {AlertContext} from '../alert/alertContext'
import React, {useState, useContext} from 'react'
import {DatabaseContext} from '../database/databaseContext'
import {Set} from "../components/Set";

const CreateCollection = ({name, title, handleClick}) => {
    const [nameCollection, setNameCollection] = useState(''); 
    const [titles, setTitles] = useState('');
    const isAuth = useAuth();
    const alert = useContext(AlertContext)
    const database = useContext(DatabaseContext)

    const submitHandler = event => {
        event.preventDefault()
    if (nameCollection.trim() && titles.trim()) {
        database.addNote(nameCollection.trim()&& titles.trim()).then(() => {
            alert.show('Create new coolection', 'success')
            }).catch(() => {
            alert.show('Error!', 'danger')
            })
            setNameCollection('')
            setTitles('')
        } else {
            alert.show('Enter name collection')
        }
    }

    return isAuth ? (
        <h3 onSubmit={submitHandler}>

        <div>
        <input
        type="nameCollection"
        value={nameCollection}
        placeholder="Input nameCollection"
        onChange={(e) => setNameCollection(e.target.value)} 
        />
        
        <input 
        type="titles"
        value={titles}
        placeholder="Titles"
        onChange={(e) => setTitles(e.target.value)} 
        />
        <Set />
        <input 
        onClick={() => handleClick(nameCollection,titles)} 
        type="submit" 
        value = {"Create"} />
    
        </div>
        </h3>
    ) : (
        <Navigate to="/login"/>
    )
}

export {CreateCollection}
