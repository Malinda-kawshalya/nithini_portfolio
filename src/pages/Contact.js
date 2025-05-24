import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',      
    user_email: '',     
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      
      await emailjs.sendForm(
        'service_kods9sb', 
        'template_llkyfqk', 
        formRef.current, 
        'F99SlF2BL6Q54bkZ_'
      );
      
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Failed to send message. Please try again or email me directly.'
      });
    }
  };

  return (
    <div className="contact-page">
      {/* Animated Background */}
      <div className="animated-bg">
        {/* No changes to this section */}
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
      <header className="contact-header">
        <h1>Get In Touch</h1>
        <p className="subtitle">Let's create something extraordinary together!</p>
      </header>

      {/* Contact Content */}
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info-section">
            {/* No changes to this section */}
            <h2 className="section-title">Contact Information</h2>
            <p className="contact-text">
              Have a project in mind or want to say hello? Feel free to reach out through the form or directly via:
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">📧</div>
                <div className="contact-detail-text">
                  <h3>Email</h3>
                  <p>nellyjayathilaka13@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">🔗</div>
                <div className="contact-detail-text">
                  <h3>LinkedIn</h3>
                  <p>nithini-jayathilaka</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">📱</div>
                <div className="contact-detail-text">
                  <h3>Phone</h3>
                  <p>0710388215</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/NellyJay13" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="http://www.linkedin.com/in/nithini-jayathilaka-4229862b7" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://www.facebook.com/share/12KpgE6jKGq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            </div>
          </div>
          
          <div className="contact-form-section">
            <h2 className="section-title">Send Me a Message</h2>
            
            {formStatus.submitted && (
              <div className="success-message">
                <span>✓</span> Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            {formStatus.error && (
              <div className="error-message">
                <span>✕</span> {formStatus.error}
              </div>
            )}
            
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="user_name">Your Name</label>
                <div className="input-container">
                  <input 
                    type="text" 
                    id="user_name" 
                    name="user_name"  // Changed from "name" to "user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required 
                  />
                  <div className="input-focus-effect"></div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="user_email">Your Email</label>
                <div className="input-container">
                  <input 
                    type="email" 
                    id="user_email" 
                    name="user_email"  // Changed from "email" to "user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required 
                  />
                  <div className="input-focus-effect"></div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <div className="input-container">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                  <div className="input-focus-effect"></div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <div className="input-container textarea-container">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="input-focus-effect"></div>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="submit-button" 
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? (
                  <span className="loading-indicator">
                    <span className="loading-dot"></span>
                    <span className="loading-dot"></span>
                    <span className="loading-dot"></span>
                  </span>
                ) : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;