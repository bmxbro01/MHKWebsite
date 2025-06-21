import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { useAuth } from '../contexts/AuthContext';

// Inside your NavBar component, add this:
const NavBar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <header>
      <nav className="navbar">
          <ul className='nav-links'>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/schedule">Schedule</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="nav-user">
        <span>Welcome, {user?.username}!</span>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      </header>
    </>
  );
};
export default NavBar;
