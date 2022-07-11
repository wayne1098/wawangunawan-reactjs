import { useParams, useHistory } from "react-router-dom";

const Post = () => {
const { id } = useParams()
const history = useHistory();
return (
    <div className="main"> 
        <h4>post ke-{id} </h4>
        <p> deskripsi </p>
        <button onClick={()=> history.push("/")}>back</button>
        </div>

)
}
export default Post;
