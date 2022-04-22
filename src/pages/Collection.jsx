import { useParams } from "react-router-dom";
const Collection = () => {
    const {id} = useParams();

    return (
        <div>
            {id}
        </div>
    )
}

export {Collection}