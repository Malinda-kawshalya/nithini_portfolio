import { useRef } from 'react';
import starfish from '../assets/starfish.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import profileImage from '../assets/me.png';
import { useNavigate } from 'react-router-dom';

function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">

      {/* Animated Ocean Background */}
      <div className="animated-bg">
        <div className="bubbles">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                width: `${12 + Math.random() * 24}px`,
                height: `${12 + Math.random() * 24}px`,
                opacity: 0.5 + Math.random() * 0.5,
              }}
            />
          ))}
        </div>
        <div className="wave"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Nithini</h1>
          <p>Dive into my ocean of creativity and technical expertise.</p>
          <button onClick={() => navigate('/about')} className="cta-button">
            Explore More
          </button>
        </div>

      </section>

      {/* About Section */}
<section ref={aboutRef} className="about-section modern">
  <div className="about-flex">
    <div className="about-img-col">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="about-badge">
        <span>🌊</span>
        <span>CS Undergraduate</span>
      </div>
    </div>
    <div className="about-text-col">
      <h2 className="section-title">About Me</h2>
      <p className="about-intro">
        Hi! I’m <span className="about-highlight">Nithini</span>, an IT undergraduate with a passion for building immersive, interactive web experiences.
      </p>
      <ul className="about-list">
        <li>
          <strong>🌐 Web Enthusiast:</strong> I love crafting modern UIs with <span>React.js</span>, <span>JavaScript</span>, and <span>CSS</span>.
        </li>
        <li>
          <strong>🎨 Creative Coder:</strong> I blend design and code to create seamless, visually appealing applications.
        </li>
        <li>
          <strong>🚀 Fast Learner:</strong> Always exploring new technologies like <span>Three.js</span> and <span>APIs</span>.
        </li>
        <li>
          <strong>🤝 Team Player:</strong> I enjoy collaborating and sharing ideas to solve real-world problems.
        </li>
      </ul>
      <div className="about-quote">
        <span>“Code is like the ocean—deep, powerful, and full of endless possibilities.”</span>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section ref={skillsRef} className="skills-section">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {['React.js', 'JavaScript', 'CSS', 'HTML', 'Git', 'Figma'].map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
<section ref={projectsRef} className="projects-section">
  <h2 className="section-title">My Projects</h2>
  <div className="projects-grid">
    <div className="project-card">
      <h3>Learning Management System</h3>
      <p>An interactive web app to explore ocean species using React.js and REST APIs.</p>
    </div>
    <div className="project-card">
      <h3>Turtle Tracker</h3>
      <p>A real-time tracking app for sea turtle migrations with interactive maps.</p>
    </div>
    <div className="project-card">
      <h3>Coral Gallery</h3>
      <p>A dynamic gallery of coral reef visuals with 3D animations using Three.js.</p>
    </div>
  </div>
  <div className="projects-more">
    <Link to="/projects" className="explore-more-button">
      Explore More Projects
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </Link>
  </div>
</section>

      {/* Education Section */}
      <section ref={educationRef} className="education-section">
        <h2 className="section-title">Education & Certifications</h2>
        <ul>
          <li>B.Sc.(Hons)in Computer Science, NSBM Green University, 2023–Present</li>
          <li>Figma UI UX Design Essentials - Danial Walter Scott </li>
          
        </ul>
      </section>

      {/* Contact Section */}
<section ref={contactRef} className="contact-section">
  <h2 className="section-title">Get In Touch</h2>
  <p>Let's create something extraordinary together!</p>
  <Link to="/contact" className="contact-button">
    Contact Me
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.644C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
    </svg>
  </Link>
</section>
    </div>
  );
}

export default Home;