import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Forms} from '../pages/Forms';
import {setUser} from '../store/slices/userSlice';
import {AlertContext} from '../alert/alertContext'
import {useContext} from 'react'

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useContext(AlertContext)

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/', {replace: true});
            })
            .catch(alert.show("This email already exists"))
    }

    return (
        <Forms
            title="Registretion"
            handleClick={handleRegister}
        />
    )
}

export {SignUp}