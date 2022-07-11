import { Link } from "react-router-dom";
const Home =() => {
    return(
        <div className="main">
            <h1>home</h1>
        <ul>
            <li><Link to="/post/1">1</Link></li>
            <li><Link to="/post/2">2</Link></li>
            <li><Link to="/post/3">3</Link></li>
        </ul>
        <p>aadsvedfgrjbggbljpwojinewkfnwefoi</p>        
        </div>
    )
}

export default Home;
    