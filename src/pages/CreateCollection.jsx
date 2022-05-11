import {useAuth} from '../hook/useAuth';
import { useNavigate} from 'react-router-dom';

const CreateCollection = () => {
    const {singout} = useAuth();
    const navigate = useNavigate();

    return(
        <div>
            <h1>Create a collection</h1>
            <button onClick={() => singout(() => navigate('/', {replace: true}))}>Log Out</button>
        </div>
    )
}

export {CreateCollection};