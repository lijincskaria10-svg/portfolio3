import { useState } from 'react'
import { Mail, Globe, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className="page-fade-in">
      <h2 className="info-section-title">
        <span className="title-decor"></span>
        <MessageSquare size={22} style={{ color: 'var(--primary)' }} />
        Get in Touch
      </h2>

      <div className="contact-layout">
        
        {/* Contact Info Cards */}
        <div className="contact-info-block">
          <a href="mailto:lijin032004@gmail.com" className="contact-card" id="contact-email">
            <div className="contact-card-icon">
              <Mail size={24} />
            </div>
            <div className="contact-card-details">
              <h4>Email Me</h4>
              <p>lijin032004@gmail.com</p>
            </div>
          </a>

          <a 
            href="https://github.com/lijincskaria10-svg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
            id="contact-github"
          >
            <div className="contact-card-icon">
              <GithubIcon size={24} />
            </div>
            <div className="contact-card-details">
              <h4>GitHub Profile</h4>
              <p>github.com/lijincskaria10-svg</p>
            </div>
          </a>

          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
            id="contact-linkedin"
          >
            <div className="contact-card-icon">
              <LinkedinIcon size={24} />
            </div>
            <div className="contact-card-details">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/lijin-c-skaria</p>
            </div>
          </a>

          <div className="contact-card" id="contact-website">
            <div className="contact-card-icon">
              <Globe size={24} />
            </div>
            <div className="contact-card-details">
              <h4>Website</h4>
              <p>www.lijincskaria.dev</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          {submitted && (
            <div className="toast-success" style={{ marginBottom: '1.25rem' }} id="submit-success-toast">
              <CheckCircle2 size={20} />
              <span>Message sent successfully! I will reply shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name-input">Name</label>
              <input
                id="contact-name-input"
                type="text"
                name="name"
                className="form-input"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email-input">Email Address</label>
              <input
                id="contact-email-input"
                type="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject-input">Subject (Optional)</label>
              <input
                id="contact-subject-input"
                type="text"
                name="subject"
                className="form-input"
                placeholder="Collaboration Opportunity"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message-input">Message</label>
              <textarea
                id="contact-message-input"
                name="message"
                className="form-textarea"
                placeholder="Hi Lijin, I'd love to chat about..."
                required
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting}
              id="contact-submit-btn"
            >
              <Send size={18} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
