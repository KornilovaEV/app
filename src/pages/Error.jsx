import { Link } from 'react-router-dom'

const Notfoundpage = () => {
    return (
        <h2>
            This page doesn't exist. Go <Link to="/">home</Link>
        </h2>
    )
}

export {Notfoundpage};