import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <ul className='nav-links'>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/schedule">Schedule</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default NavBar;