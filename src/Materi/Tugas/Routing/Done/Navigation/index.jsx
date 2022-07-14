import { Link } from 'react-router-dom';






const Nav =() => {


  return (
    <div
      style={{
        width: "100%",
        height: "30px",
        background: "black",
        padding: "20px",
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
      Portofolio
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/Form">
        Tugas Form
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/Hooks">
        Hook
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/Lifecycle">
        Lifecycle
      </Link>
    </div>
  );
};

export default Nav;