import {NavLink, Outlet} from 'react-router-dom';


const Layout = () => {
    return (
        <>
        <header>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/registration">Registration Page</NavLink>
            <NavLink to="/login">Login Page</NavLink>
            <NavLink to="/collections">Collection Page</NavLink>
            
        </header>

        <main className="container">
            <Outlet />
        </main>
        <footer className="container">2022, Kornilova Helen</footer>
        </>
    )

}
export {Layout}