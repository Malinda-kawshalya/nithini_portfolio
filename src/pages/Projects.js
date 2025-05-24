import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "Dias Family - Web Application",
      description: `A dynamic service platform enabling users to seamlessly browse and book professionals like masons, plumbers, and electricians. Users can easily find skilled workers, view profiles, and request services directly through the website. Service providers can create listings, set availability, manage bookings, and stay connected with customers—ensuring convenience, reliability, and efficient communication for every task.`,
      tech: "Java, CSS, JavaScript, HTML",
      // github: "https://github.com/your-repo/dias-family"
    },
    {
      title: "BARZA Mobile Application",
      description: `Developed a Barter App that enables users to exchange goods and services using a unique Star Points system. Users can earn Star Points by selling items and use them to purchase other goods within the platform, creating a seamless and cashless trading experience.`,
      tech: "Flutter, Firebase",
      // github: "https://github.com/your-repo/barza"
    },
    {
      title: "Java Web Shopping Site",
      description: `Developed an online shopping platform with user authentication, product browsing, search functionality, shopping cart, and secure checkout. Admin panel allows product and user management. Optimized for responsive design across devices.`,
      tech: "Java, HTML, CSS, JavaScript, MySQL, Tomcat",
      // github: "https://github.com/your-repo/java-shopping"
    },
    {
      title: "Antiqua",
      description: `A sophisticated online bidding platform tailored for antique products, enabling sellers to list items, configure bidding time frames, and manage auctions with ease. Buyers engage in real-time bidding, fostering a competitive and seamless auction experience through a secure, user-centric interface.`,
      tech: "React JS, .NET, MySQL",
      // github: "https://github.com/your-repo/antiqua"
    },
    {
      title: "Learning Management System",
      description: `Developed a Learning Management System (LMS) designed to cater to teachers, students, and administrators. Key features include assignment creation, submission, grading, and management, providing an efficient and user friendly platform for educational institutions.`,
      tech: "HTML, CSS, PHP",
      // github: "https://github.com/your-repo/lms"
    },
  ];

  return (
    <main className="projects-page">
      <div className="projects-header">
        <h1>
          <span role="img" aria-label="wave">🌊</span> My Projects
        </h1>
        <p className="projects-subtitle">
          Dive into my portfolio of web and mobile applications, each crafted with creativity and technical expertise.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-card-header">
              <div className="project-icon">
                {/* Ocean-themed icon */}
                <span role="img" aria-label="project">{["🌊","🐚","🐢","🪸","🐠"][idx % 5]}</span>
              </div>
              <h2>{proj.title}</h2>
            </div>
            <p className="project-desc">{proj.description}</p>
            <div className="project-tech">
              <strong>Tech Stack:</strong> {proj.tech}
            </div>
            {/* Uncomment and add your GitHub repo links */}
            {/* <a href={proj.github} className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            </a> */}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;