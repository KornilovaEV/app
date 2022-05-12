import React, {Fragment, useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { DatabaseContext } from '../database/databaseContext'
import { Loader } from '../components/Loader'
const Home = () => {
    const {loading, notes, fetchNotes} = useContext(DatabaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
        }, [])  

    return (
        <Fragment>
            <Form />

            <hr/>
            {loading
        ? <Loader />
        : <Notes notes={notes} /*onRemove={removeNote} *//>
        }
            <Notes notes={notes} />

        </Fragment>
    )
}

export {Home}