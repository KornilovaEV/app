import React, {Fragment, useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { DatabaseContext } from '../database/databaseContext'
import { Loader } from '../components/Loader'


export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(DatabaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
        }, [])  
    return (
    
    <div>User</div>
    )
}
