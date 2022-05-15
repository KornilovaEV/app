import React, {useReducer, useState} from 'react'
import axios from 'axios'
import {DatabaseContext} from './databaseContext'
import {databaseReducer} from './databaseReduser'
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../alert/types';
import { useAuth } from '../hook/useAuth';

const url = "https://collection-2f228-default-rtdb.firebaseio.com"

export const DBstate = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(databaseReducer, initialState)
    //const {photoURL} = useAuth();
    //const [nameCollection, title, set] = useState('')
    
    const {idU} = useAuth();


    const showLoader = () => dispatch({type: SHOW_LOADER})
    
    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)
    
        const payload = Object.keys(res.data).map(key => {
        return {
            ...res.data[key],
            id: key
        }
        })
    
        dispatch({type: FETCH_NOTES, payload})
    }
    
    const addNote = async (nameCollection, title, set) => {
        const note = {
        uid: idU,
        nameCollection: nameCollection,
        title: title,
        set: set,
        //photoURL: photoURL,
        date: new Date().toJSON()
        }
        try {
        await axios.post(`${url}/notes.json`, note)
        const payload = {
            ...note,
        }
    
        dispatch({type: ADD_NOTE, payload})
        } catch (e) {
        throw new Error(e.message)
        }
    }
    
    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`)
    
        dispatch({
        type: REMOVE_NOTE,
        payload: id
        })
    }

    return (
        <DatabaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            loading: state.loading,
            notes: state.notes
            }}>
        {children}
        </DatabaseContext.Provider>
    )
}

