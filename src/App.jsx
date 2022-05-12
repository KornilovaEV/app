import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import { Notfoundpage } from './pages/Error';
import { Collection } from './pages/Collection';
import { Singlepage } from './pages/Singlepage';
import { EditCollection } from './pages/EditCollection';
import { CreateCollection } from "./pages/CreateCollection";

import { Layout } from "./components/Layout";
import { Alert } from "./components/Alert";
import { AlertState } from "./alert/AlertState";

import {RequireAuth} from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';

import {DatabaseState} from './database/DatabaseState';

import {Routes, Route,/* Navigate*/} from 'react-router-dom';

function App(){
    return (
        <DatabaseState>
            <AuthProvider>
                <AlertState>
                    <Alert />
                        <Routes>
                            <Route path ="/" element={<Layout />} >
                                <Route index element={<Home />}/>
                                    <Route path="login" element={<Login />}/>
                                    {/*<Route path="login-us" element={<Navigate to="/login" replace/>}/>*/}
                                    <Route path="registration" element={<Registration />}/>
                                    <Route path="collections" element={<Collection />}/>
                                    <Route path="collections/:id" element={<Singlepage />}/>
                                    <Route path="collections/:id/edit" element={
                                    <RequireAuth>
                                        <EditCollection />
                                    </RequireAuth>
                                    }/>
                                    <Route path="collections/new" element={
                                    <RequireAuth>
                                        <CreateCollection />
                                    </RequireAuth>
                                    }/>
                                <Route path="*" element={<Notfoundpage />} />
                            </Route>
                        </Routes>
                </AlertState>
            </AuthProvider>
        </DatabaseState>
    );
}

export default App;