import {NavLink, Outlet} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import {useDispatch} from 'react-redux'
import {removeUser} from '../store/slices/userSlice'
import {DatabaseState} from '../database/DatabaseState'


const Layout = () => {
    
    const {isAuth} = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
        <DatabaseState>
        <header>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/collections">Collection Page</NavLink>
            <NavLink to="/user">Your Page</NavLink>
            
            
            {isAuth?
            <input 
            style={{width:'20%', left:'75%'}}
            type="submit" 
            name="latest" 
            value={"Log OUT"} 
            onClick={()=> dispatch(removeUser())}/>
            :
            <input 
            style={{width:'20%',  left:'75%'}}
            type="submit" 
            name="latest" 
            value={"Log IN"} 
            onClick={() => navigate('/login')}/>
            }
        </header>

        <main className="container">
            <Outlet />
        </main>
        <footer className="container">2022, Kornilova Helen</footer>
        </DatabaseState>
        </>
    )

}
export {Layout}