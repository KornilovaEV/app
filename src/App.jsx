import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import { Notfoundpage } from './pages/Error';

import {Routes, Route, Link} from 'react-router-dom';

function App(){
    return (
        <>
        <header>
            <Link to="/">Home Page</Link>
            <Link to="/registration">Registration Page</Link>
            <Link to="/login">Login Page</Link>
        </header>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/registration" element={<Login />}/>
            <Route path="/login" element={<Registration />}/>
            <Route path="*" element={<Notfoundpage />} />
        </Routes>
        </>
    );
}

export default App;