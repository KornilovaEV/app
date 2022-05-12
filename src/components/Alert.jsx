import React, {useContext} from 'react'
//import {CSSTransition} from 'react-transition-group'
import {AlertContext} from '../alert/alertContext'

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if(!alert.visible) {
        return null
    }

    return (
        /* <CSSTransition
        in={alert.visible}
        timeout={{
            enter: 500,
            exit: 350
        }}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit
        >*/
        //<div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Attention </strong>
            &nbsp;{alert.text}
            <button onClick={hide} type="button" className="close note" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        //</CSSTransition>
    )
}