import { useParams } from "react-router-dom";

const EditCollection = () => {
    const {id} = useParams();
    return(
        <div>
            <h1>Edit collection! {id}</h1>
        </div>
    )
}

export {EditCollection};