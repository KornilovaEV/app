import { Link } from 'react-router-dom';
import {Loginer} from '../components/Loginer';

function Login() {
    return (
        <div>
        <h1>Login</h1>
        <Loginer />
        <p>
            No account? <Link to="/registration">Registration</Link>
        </p>

        </div>
    );
}

export {Login};
