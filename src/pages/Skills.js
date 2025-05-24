import { useEffect, useState, useRef } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState({});
  
  const skillSets = {
    frontend: [
      { name: "React.js", level: 90, icon: "💻" },
      { name: "JavaScript", level: 85, icon: "📜" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "SASS/SCSS", level: 80, icon: "💅" },
      { name: "Tailwind CSS", level: 75, icon: "🌊" }
    ],
    design: [
      { name: "Figma", level: 85, icon: "✏️" },
      { name: "Adobe XD", level: 75, icon: "🎭" },
      { name: "UI/UX Design", level: 80, icon: "🖌️" },
      { name: "Responsive Design", level: 90, icon: "📱" },
      { name: "Color Theory", level: 85, icon: "🌈" }
    ],
    tools: [
      { name: "Git/GitHub", level: 85, icon: "🔄" },
      { name: "VS Code", level: 95, icon: "🧰" },
      { name: "NPM", level: 80, icon: "📦" },
      { name: "Webpack", level: 70, icon: "📚" },
      { name: "Chrome DevTools", level: 85, icon: "🔍" }
    ],
    soft: [
      { name: "Problem Solving", level: 90, icon: "🧩" },
      { name: "Communication", level: 85, icon: "🗣️" },
      { name: "Teamwork", level: 95, icon: "👥" },
      { name: "Time Management", level: 80, icon: "⏰" },
      { name: "Adaptability", level: 90, icon: "🔄" }
    ]
  };
  
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
    
    const sections = document.querySelectorAll('.skill-section');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
  
  return (
    <div className="skills-page">
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
      <header className="skills-header">
        <h1>My Skills</h1>
        <p className="subtitle">Navigate through my technical expertise and capabilities</p>
      </header>
      
      {/* Skills Overview */}
      <section className="skills-overview">
        <div className="overview-container">
          <h2>Skills Overview</h2>
          <p>With a strong foundation in frontend development and design, I specialize in creating responsive, user-friendly web applications. My technical skills are complemented by soft skills that enable effective collaboration and problem-solving.</p>
          
        </div>
      </section>
      
      {/* Frontend Development Skills */}
      <section id="frontend" className={`skill-section ${isVisible.frontend ? 'visible' : ''}`}>
        <div className="section-header">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h2>Frontend Development</h2>
        </div>
        
        <div className="skills-list">
          {skillSets.frontend.map((skill, index) => (
            <div key={index} className="skill-item" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <div className="skill-name-level">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Design Skills */}
      <section id="design" className={`skill-section ${isVisible.design ? 'visible' : ''}`}>
        <div className="section-header">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
          </div>
          <h2>Design Skills</h2>
        </div>
        
        <div className="skills-list">
          {skillSets.design.map((skill, index) => (
            <div key={index} className="skill-item" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <div className="skill-name-level">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Tools & Technologies */}
      <section id="tools" className={`skill-section ${isVisible.tools ? 'visible' : ''}`}>
        <div className="section-header">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <h2>Tools & Technologies</h2>
        </div>
        
        <div className="skills-list">
          {skillSets.tools.map((skill, index) => (
            <div key={index} className="skill-item" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <div className="skill-name-level">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Soft Skills */}
      <section id="soft" className={`skill-section ${isVisible.soft ? 'visible' : ''}`}>
        <div className="section-header">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h2>Soft Skills</h2>
        </div>
        
        <div className="skills-list">
          {skillSets.soft.map((skill, index) => (
            <div key={index} className="skill-item" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <div className="skill-name-level">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Learning Journey */}
      <section className="learning-journey">
        <h2>My Learning Journey</h2>
        <p>Learning is a continuous process, and I'm always expanding my skill set. Here are some technologies I'm currently exploring:</p>
        
        <div className="learning-items">
          <div className="learning-item">
            <div className="learning-icon">🔮</div>
            <div className="learning-name">Three.js</div>
          </div>
          <div className="learning-item">
            <div className="learning-icon">⚛️</div>
            <div className="learning-name">Next.js</div>
          </div>
          <div className="learning-item">
            <div className="learning-icon">🔥</div>
            <div className="learning-name">Firebase</div>
          </div>
          <div className="learning-item">
            <div className="learning-icon">📱</div>
            <div className="learning-name">React Native</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;