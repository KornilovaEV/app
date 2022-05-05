import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import { Notfoundpage } from './pages/Error';
import { Collection } from './pages/Collection';
import { Singlepage } from './pages/Singlepage';
import { EditCollection } from './pages/EditCollection';
import { CreateCollection } from "./pages/CreateCollection";
import { Layout } from "./components/Layout";


import {Routes, Route, Navigate} from 'react-router-dom';

function App(){
    return (
        <>

        <Routes>
            <Route path ="/" element={<Layout />} >
                <Route index element={<Home />}/>
                <Route path="login" element={<Login />}/>
                {/*<Route path="login-us" element={<Navigate to="/login" replace/>}/>*/}
                <Route path="registration" element={<Registration />}/>
                <Route path="collections" element={<Collection />}/>
                <Route path="collections/:id" element={<Singlepage />}/>
                <Route path="collections/:id/edit" element={<EditCollection />}/>
                <Route path="collections/new" element={<CreateCollection />}/>
                <Route path="*" element={<Notfoundpage />} />
            </Route>
        </Routes>
        </>
    );
}

export default App;