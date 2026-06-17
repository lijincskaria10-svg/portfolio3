import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { User, Calendar, Mail, Code, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './components/Icons'
import Home from './pages/Home'
import PMVikas from './pages/PMVikas'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        
        {/* Header & Sticky Navigation */}
        <header>
          <div className="header-logo" id="header-logo-brand">
            <Code size={24} style={{ color: 'var(--primary)' }} />
            <span className="logo-text">LCS</span>
          </div>
          <nav aria-label="Primary Navigation">
            <NavLink to="/" end id="nav-home">
              <User size={16} />
              <span>Personal Info</span>
            </NavLink>
            <NavLink to="/pm-vikas" id="nav-pmvikas">
              <Calendar size={16} />
              <span>PM-VIKAS</span>
            </NavLink>
            <NavLink to="/contact" id="nav-contact">
              <Mail size={16} />
              <span>Contact</span>
            </NavLink>
          </nav>
        </header>

        {/* Main Workspace */}
        <main className="glass-card" style={{ marginTop: '1rem', minHeight: '500px' }} id="main-content-window">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pm-vikas" element={<PMVikas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Premium Footer */}
        <footer className="app-footer" id="app-footer-brand">
          <p>© {new Date().getFullYear()} Lijin C Skaria. All rights reserved.</p>
          <div className="footer-links">
            <a 
              href="https://github.com/lijincskaria10-svg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              aria-label="GitHub Profile"
              id="footer-github"
            >
              <GithubIcon size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              aria-label="LinkedIn Profile"
              id="footer-linkedin"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App
