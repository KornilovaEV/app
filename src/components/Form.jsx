import React, {useState, useContext} from 'react';
import {AlertContext} from '../alert/alertContext'
import {DatabaseContext} from '../database/databaseContext'


const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext)
    const database = useContext(DatabaseContext)

    const submitHandler = event => {
        event.preventDefault()

    if (value.trim()) {
        database.addNote(value.trim()).then(() => {
            alert.show('Create new coolection', 'success')
            }).catch(() => {
            alert.show('Error!', 'danger')
            })
            setValue('')
        } else {
            alert.show('Enter name collection')
        }
    }

    return (

        <form onSubmit={submitHandler} >
            <div className="form-group">
                <input type="text" className="form-control" 
                placeholder="Enter name collection"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}
export {Form}