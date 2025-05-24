import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content advanced">
        <div className="footer-brand">
          <span className="footer-logo">🌊</span>
          <span className="footer-title">Nithini Jayathilaka</span>
          <span className="footer-tagline">Dive into creativity & code</span>
        </div>
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <FaEnvelope /> <a href="mailto:nellyjayathilaka13@gmail.com">nellyjayathilaka13@gmail.com</a>
            </li>
            <li>
              <FaPhoneAlt /> <a href="tel:0710388215">0710388215</a>
            </li>
            <li>
              <FaMapMarkerAlt /> Kegalle, Sri Lanka
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="footer-links">
            <a href="mailto:your.email@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="http://www.linkedin.com/in/nithini-jayathilaka-4229862b7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/NellyJay13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nithini Jayathilaka. All rights reserved.</p>

      </div>
    </footer>
  );
}

export default Footer;