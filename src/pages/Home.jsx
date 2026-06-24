import { User, MapPin, Briefcase, Code, Sparkles, ExternalLink, Cpu, Layers, Globe } from 'lucide-react'
import { GithubIcon } from '../components/Icons'

export default function Home() {
  const skills = [
    { name: 'React.js', icon: <Cpu size={16} />, level: 'Intermediate' },
    { name: 'JavaScript (ES6+)', icon: <Code size={16} />, level: 'Intermediate' },
    { name: 'CSS3 / Glassmorphism', icon: <Layers size={16} />, level: 'Advanced' },
    { name: 'Node.js', icon: <Globe size={16} />, level: 'Learning' },
    { name: 'Git & GitHub', icon: <GithubIcon size={16} />, level: 'Intermediate' },
    { name: 'Prisma ORM', icon: <Sparkles size={16} />, level: 'Learning' }
  ];

  return (
    <div className="page-fade-in">
      {/* Hero Banner Section */}
      <div className="hero-container">
        <div className="hero-content">
          <h2>Welcome to My Space</h2>
          <h1>
            Hi, I'm <span className="hero-gradient-text">Lijin C Skaria</span>
          </h1>
          <p className="hero-description">
            I am a passionate ECE student who loves working on electronic circuits and projects. 
            I live in Kottayam and want to explore the world.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-val">100%</span>
              <span className="stat-lbl">Dedication</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">30+</span>
              <span className="stat-lbl">Days Progress</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">5+</span>
              <span className="stat-lbl">Projects</span>
            </div>
          </div>
        </div>

        <div className="avatar-wrapper">
          <img 
            src="/developer_avatar.jpg" 
            alt="Lijin C Skaria illustration" 
            className="avatar-image"
            id="hero-avatar"
          />
        </div>
      </div>

      {/* Personal Info Cards */}
      <h2 className="info-section-title">
        <span className="title-decor"></span>
        <User size={22} style={{ color: 'var(--primary)' }} />
        Personal Information
      </h2>
      
      <div className="info-cards-grid">
        <div className="info-card" id="info-name">
          <div className="info-icon-box">
            <User size={20} />
          </div>
          <div className="info-card-content">
            <h3>Full Name</h3>
            <p>Lijin C Skaria</p>
          </div>
        </div>

        <div className="info-card" id="info-location">
          <div className="info-icon-box">
            <MapPin size={20} />
          </div>
          <div className="info-card-content">
            <h3>Location</h3>
            <p>Kottayam, Kerala</p>
          </div>
        </div>

        <div className="info-card" id="info-profession">
          <div className="info-icon-box">
            <Briefcase size={20} />
          </div>
          <div className="info-card-content">
            <h3>Profession</h3>
            <p>ECE Student</p>
          </div>
        </div>

        <div className="info-card" id="info-interests">
          <div className="info-icon-box">
            <Code size={20} />
          </div>
          <div className="info-card-content">
            <h3>Interests</h3>
            <p>Electronics</p>
          </div>
        </div>
      </div>

      {/* Skills Showcase */}
      <h2 className="info-section-title">
        <span className="title-decor"></span>
        <Sparkles size={22} style={{ color: 'var(--secondary)' }} />
        Tech Stack & Skills
      </h2>
      
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-tag" title={`Skill level: ${skill.level}`}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
