import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        
        
      </ul>
    </nav>
  );
}

export default Navbar;