import { createContext } from "react";
import {useSelector} from 'react-redux';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const {email, token, id,/* photoURL*/} = useSelector(state => state.user);

const value = {isAuth: !!email, email, token, id/*, photoURL*/};

    return <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
}
