import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Service() {
  const [isVisible, setIsVisible] = useState({});

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

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  // Service data
  const services = [
    {
      id: "ui-ux",
      title: "UI/UX Design",
      emoji: "🎨",
      description: "Creating intuitive, user-friendly interfaces that engage and delight. I focus on user research, wireframing, prototyping, and usability testing to design digital experiences that are both beautiful and functional.",
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      emoji: "💻",
      description: "Building responsive, interactive websites using modern web technologies. I transform designs into clean, efficient code that works flawlessly across all devices and browsers.",
      technologies: ["React.js", "JavaScript", "HTML/CSS", "SASS"]
    },
    {
      id: "portfolio",
      title: "Personal Portfolio Design",
      emoji: "✨",
      description: "Crafting unique, personalized portfolios that showcase your skills and personality. I help professionals stand out with custom portfolio websites that make a lasting impression on potential clients and employers.",
      technologies: ["Personal Branding", "Custom Design", "SEO", "Content Strategy"]
    },
    {
      id: "graphic",
      title: "Graphic Design",
      emoji: "🖌️",
      description: "Creating visual assets that communicate your message effectively. From logos and brand identity to social media graphics and digital illustrations, I deliver designs that strengthen your brand presence.",
      technologies: ["Adobe Photoshop", "Illustrator", "Brand Identity", "Visual Communication"]
    }
  ];

  return (
    <div className="service-page">
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

      {/* Header */}
      <header className="services-header">
        <h1>My Services</h1>
        <p className="subtitle">Dive deep into the ocean of creative solutions I provide</p>
      </header>

      {/* Services Grid */}
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              id={service.id}
              key={service.id} 
              className={`service-card ${isVisible[service.id] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-icon-container">
                <span className="service-emoji">{service.emoji}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tech-tags">
                {service.technologies.map((tech, techIndex) => (
                  <span key={`${service.id}-tech-${techIndex}`} className="tech-tag">{tech}</span>
                ))}
              </div>
              <Link to="/contact" className="service-cta">
                Request More Details
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta-section">
          <h2>Want to collaborate?</h2>
          <p>Let's discuss how I can help bring your creative vision to life!</p>
          <Link to="/contact" className="cta-button">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.644C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;