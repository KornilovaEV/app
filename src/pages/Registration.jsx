import { Link } from 'react-router-dom';
import {SignUp} from '../components/SignUp';


function Registration() {

    return (
        <div>
        <h1>Registration</h1>
        <SignUp />

        <p>
            No account? <Link to="/registration">Registration</Link>
        </p>

        </div>
    );
}

export {Registration};
