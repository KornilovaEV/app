import {Link} from "react-router-dom"
import { useState, useEffect } from 'react'


const Collection = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setCollections(data))
    }, []);

    return (
        <div>
            <h1>Our Collections</h1>
            <Link to="/collections/new">Add new collection</Link>
            {
                collections.map(collection => (
                    <Link key={collection.id} to={`/collections/${collection.id}`}>
                        <li>{collection.title}</li>
                    </Link>
                ))
                
                }
        </div>
    )
}

export {Collection}
