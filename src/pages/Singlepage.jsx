import { useParams, Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';

const Singlepage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [collection, setCollections] = useState(null);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setCollections(data))
    }, [id]);

    return (
        <div>
            <button type='button' onClick={goBack}>back</button>
            {/*Bad*/}
            <button type='button' onClick={goHome}>home</button>
            {collection && (
                <>
                    <h1>{collection.title}</h1>
                    <p>{collection.body}</p>
                    
                    <Link  to={`/collections/${collection.id}/edit`}> 
                        <button type='button'>Edit</button>
                    </Link>
                    
                </>
            )}
        </div>
    )
}

export {Singlepage}