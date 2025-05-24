import { useState, useEffect } from 'react';
import turtle from '../assets/turtle.png';
import '../styles/About.css';
// Replace with your actual CV file path
import cvPdf from '../assets/cv.pdf'; 
import profileImage from '../assets/me.png';

function About() {
  const [isVisible, setIsVisible] = useState({
    intro: false,
    education: false,
    skills: false,
    interests: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('.about-section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="about-page">
      {/* Animated Background */}
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

      {/* Header Section */}
      <header className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">Diving deeper into my ocean of experience</p>
      </header>

      {/* Profile Section */}
      <section className="about-section profile-section" id="intro">
        <div className={`section-content ${isVisible.intro ? 'visible' : ''}`}>
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div className="profile-badge">
              <span>🌊</span>
              <span>Web Developer</span>
            </div>
          </div>
          
          <div className="profile-details">
            <h2>Nithini Jayathilaka</h2>
            <p className="tagline">Frontend Developer & CS Undergraduate</p>
            
            <p className="bio">
              Hi! I'm Nithini Jayathilaka, a passionate and creative UI/UX Designer and Front-End Developer with a strong focus on designing user-friendly, responsive, and visually appealing digital experiences. 
              I enjoy turning ideas into meaningful interfaces that not only look good but also work smoothly.
            </p>
            
            <div className="profile-cta">
              <a href={cvPdf} download className="cv-button">
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="about-section education-section" id="education">
        <h2 className="section-title">Education & Certifications</h2>
        <div className={`section-content ${isVisible.education ? 'visible' : ''}`}>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Bachelor of Science in Computer Science</h3>
                <p className="timeline-place">NSBM Green University</p>
                <p className="timeline-date">2023 - Present</p>
                <p>Focusing on web development, algorithms, and data structures, UI & UX Designs. Maintained a GPA of 3.67/4.0.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Figma UI UX Design Essentials</h3>
                <p className="timeline-place">Udemy</p>
                <p className="timeline-date">2025</p>
                <p>Completed intensive training in Figma, Adobe XD and UX principles</p>
              </div>
            </div>
          
          </div>
        </div>
      </section>


      {/* Interests Section */}
      <section className="about-section interests-section" id="interests">
        <h2 className="section-title">Personal Interests</h2>
        <div className={`section-content ${isVisible.interests ? 'visible' : ''}`}>
          <div className="interests-grid">
            <div className="interest-card">
              <span className="interest-icon">🌊</span>
              <h3>Ocean Conservation</h3>
              <p>Passionate about protecting marine ecosystems and reducing pollution in our oceans.</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">💻</span>
              <h3>Web Design</h3>
              <p>Constantly exploring new techniques to create beautiful and responsive interfaces.</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">📚</span>
              <h3>Continuous Learning</h3>
              <p>Always seeking to expand my knowledge in tech and other fields.</p>
            </div>
            <div className="interest-card">
              <span className="interest-icon">🎨</span>
              <h3>Digital Art</h3>
              <p>Creating digital illustrations and designs in my free time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;