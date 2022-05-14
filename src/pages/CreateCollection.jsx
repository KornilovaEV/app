
import {Navigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const CreateCollection = () => {

    const isAuth = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome</h1>


        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export {CreateCollection}
