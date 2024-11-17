import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    LogOut();
    navigate(location?.state ? location.state : "/");
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          exact
          activeClassName="nav-link-active"
          className="nav-link"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeClassName="nav-link-active"
          className="nav-link"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          activeClassName="nav-link-active"
          className="nav-link"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar absolute bg-transparent z-10 text-white font-semibold lg:px-10 px-3 py-3 font-montserrat">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#00000069] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img className="lg:h-20 h-16 " src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex bg-[#00000069] rounded-xl px-1">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end z-20 ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  title={user.displayName}
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL || "https://via.placeholder.com/150"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#00000069] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/profile"
                  activeClassName="nav-link-active"
                  className="nav-link-drop"
                >
                  <span className="justify-between">Profile</span>

                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <Link to="/profile" className="nav-link-drop">Settings</Link>
              </li>
              <li>
                <Link onClick={handleLogout} className="nav-link-drop">Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn px-8  bg-[#1d4734] text-white border-green-900 hover:text-green-900">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
