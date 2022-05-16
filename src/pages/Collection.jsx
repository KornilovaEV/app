import {Link, useSearchParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import { CollectionFilter } from '../components/CollectionFilter';


const Collection = () => {
    const [collections, setCollections] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setCollections(data))
    }, []);

    return (
        <div>
            <h1> Collections</h1>
            <CollectionFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
            <Link to="/collections/new">Add new collection</Link>
            {
                collections.filter(
                    collection => collection.title.includes(postQuery) && collection.id >= startsFrom
                )
                .map(collection => (
                    <Link key={collection.id} to={`/collections/${collection.id}`}>
                        <li>{collection.title}</li>
                    </Link>
                ))
                
                }
        </div>
    )
}

export {Collection}
