import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>Reacticious</h1>
      <nav>
        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
          to="/"
        >
          home
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
          to="/tech"
        >
          tech
        </NavLink>
        <NavLink to="/how-it-works" className="nav-link">
          how it works
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
