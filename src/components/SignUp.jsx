import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Forms} from '../pages/Forms';
import {setUser} from '../store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const {navigate} = useNavigate();

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
            .catch(console.error)
    }

    return (
        <Forms
            title="Registretion"
            handleClick={handleRegister}
        />
    )
}

export {SignUp}