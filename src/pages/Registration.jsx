import { Link } from 'react-router-dom';
import {SignUp} from '../components/SignUp';


function Registration() {

    return (
        <div>
        <h1>Registration</h1>
        <SignUp />

        <p>
            You have account? <Link to="/login">Login</Link>
        </p>

        </div>
    );
}

export {Registration};
