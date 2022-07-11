import { Link } from 'react-router-dom';
// import './index.css';

const Navigation =() => {
    return(
        <div className='sidebar'>
            <Link to="/"><i className="fa fa-fu fa-home"></i>Home</Link>
            <Link to="/Service"><i className="fa fa-fu fa-wrench"></i>Service</Link>
            <Link to="/Client"><i className="fa fa-fu fa-user"></i>Client</Link>
            <Link to="/Contact"><i className="fa fa-fu fa-envelope"></i>Contact</Link>
        </div>
    )
}

export default Navigation;
    