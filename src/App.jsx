import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import { Notfoundpage } from './pages/Error';
import { Collection } from './pages/Collection';
//import { Singlepage } from './pages/Singlepage';
import { Layout } from "./components/Layout";


import {Routes, Route} from 'react-router-dom';

function App(){
    return (
        <>

        <Routes>
            <Route path ="/" element={<Layout />} >
                <Route index element={<Home />}/>
                <Route path="login" element={<Login />}/>
                <Route path="registration" element={<Registration />}/>
                <Route path="collection" element={<Collection />}/>
                <Route path="collection/:id" element={<Collection />}/>
                <Route path="*" element={<Notfoundpage />} />
            </Route>
        </Routes>
        </>
    );
}

export default App;