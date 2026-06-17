import { useState, useEffect } from 'react'
import { Calendar, Award, CheckCircle, Clock, BookOpen, X, CheckSquare, Edit3 } from 'lucide-react'

// Full 31-day developer curriculum mapping to PM-VIKAS goals
const DAYS_DATA = [
  {
    id: 1,
    title: "Intro to Web & HTML5 Basics",
    desc: "Learn how the internet and web browsers work. Build your first webpage using semantic HTML5 tags (header, nav, section, article, footer), headings, lists, and images.",
    tasks: ["Learn client-server architecture", "Use HTML5 semantic tags", "Create a basic structure with lists and links"]
  },
  {
    id: 2,
    title: "Advanced HTML & Forms",
    desc: "Master forms, input validation, tables, and media elements. Learn how to structure clean documents that are accessible (A11y) and SEO-optimized.",
    tasks: ["Build a contact form with input types", "Add client-side validation attributes", "Write semantic table layouts"]
  },
  {
    id: 3,
    title: "CSS Foundations & Selectors",
    desc: "Dive into styling with Cascading Style Sheets. Learn classes, IDs, attribute selectors, CSS color systems, fonts, and typography hierarchies.",
    tasks: ["Style a page using external CSS stylesheet", "Practice CSS specificity rules", "Implement modern typography with Google Fonts"]
  },
  {
    id: 4,
    title: "The Box Model & CSS Flexbox",
    desc: "Understand margins, borders, padding, and content box. Master one-dimensional layouts using Flexbox (justify-content, align-items, flex-direction).",
    tasks: ["Master box-sizing: border-box", "Build a responsive navigation bar", "Create flex-row and flex-column alignments"]
  },
  {
    id: 5,
    title: "CSS Grid Layouts",
    desc: "Learn two-dimensional page design using CSS Grid. Explore grid-template-columns, grid-areas, gap, auto-fit, and minmax values.",
    tasks: ["Design a 3-column dashboard layout", "Implement responsive grid template areas", "Use minmax for flexible column sizing"]
  },
  {
    id: 6,
    title: "Responsive Design & CSS Variables",
    desc: "Create responsive websites using Media Queries. Learn CSS custom properties (variables) to build themes like dark mode.",
    tasks: ["Create breakpoints for mobile and desktop", "Define global CSS color variables", "Apply transitions on hover effects"]
  },
  {
    id: 7,
    title: "Version Control with Git & GitHub",
    desc: "Set up Git, create repositories, track files, make commits, and push code to GitHub. Learn basics of branching and pull requests.",
    tasks: ["Install and configure Git globally", "Make commits with descriptive messages", "Push your repository to GitHub"]
  },
  {
    id: 8,
    title: "JavaScript Basics & Variables",
    desc: "Learn programming concepts: primitive types, variable declarations (let, const), basic arithmetic, string interpolation, and comments.",
    tasks: ["Use console.log for debugging", "Perform arithmetic operations", "Apply template literals for string formatting"]
  },
  {
    id: 9,
    title: "Control Flow & Conditionals",
    desc: "Make decisions in code using if/else statements, ternary operators, switch statements, and loop structures (for, while, and do-while).",
    tasks: ["Write conditional check logic", "Build a multiplication table using loops", "Implement a simple calculator switch case"]
  },
  {
    id: 10,
    title: "Functions & Scope",
    desc: "Understand reusable blocks of code. Learn function declarations, function expressions, arrow functions, return values, parameters, and global vs local scope.",
    tasks: ["Write standard and arrow functions", "Create a function returning computed values", "Explain variable scope block rules"]
  },
  {
    id: 11,
    title: "JavaScript Arrays & Methods",
    desc: "Work with lists of data. Master advanced array traversal methods like map(), filter(), reduce(), and find().",
    tasks: ["Filter out odd numbers from a list", "Double array values using map()", "Sum up shopping cart items using reduce()"]
  },
  {
    id: 12,
    title: "Objects & ES6+ Features",
    desc: "Explore key-value pairs, nested objects, object destructuring, spread/rest operators, and array/object shorthand.",
    tasks: ["Create a detailed profile object", "Use object destructuring in a function", "Merge two objects using spread operator"]
  },
  {
    id: 13,
    title: "DOM Manipulation & Events",
    desc: "Learn to connect JS with HTML. Select elements using querySelector, update text/styles, create elements, and listen to click and keyboard events.",
    tasks: ["Select and edit an HTML element dynamic text", "Create a new DOM node and append it", "Build an event listener for button click"]
  },
  {
    id: 14,
    title: "Local Storage & Session Storage",
    desc: "Persist user data inside the web browser. Learn JSON.stringify and JSON.parse to save complex arrays and objects.",
    tasks: ["Write key-value items to localStorage", "Retrieve and load items on page reload", "Clear storage programmatically"]
  },
  {
    id: 15,
    title: "Asynchronous JS & Promises",
    desc: "Understand callback hell, the Event Loop, Promises, resolve/reject states, and how async/await simplifies asynchronous code flow.",
    tasks: ["Write a promise that resolves after 2 seconds", "Convert a promise chain to async/await syntax", "Handle catch block errors correctly"]
  },
  {
    id: 16,
    title: "Fetch API & Rest Endpoints",
    desc: "Connect your frontend to servers. Fetch data from mock APIs (JSONPlaceholder) and render lists dynamically.",
    tasks: ["Call an external API using fetch()", "Display data records on webpage loading", "Add a loading indicator during fetch request"]
  },
  {
    id: 17,
    title: "Intro to React & JSX",
    desc: "Understand what React is, Single Page Applications, Vite bundlers, components, JSX rules, and how to pass variables as props.",
    tasks: ["Set up a new React project in Vite", "Create your first reusable component", "Pass custom parameters through props"]
  },
  {
    id: 18,
    title: "React State (useState)",
    desc: "Manage dynamic data within React components. Learn hooks, updates, triggers, and state hoisting.",
    tasks: ["Create a counter component with increase/decrease", "Build a toggle component for dark mode", "Handle state lift to parent elements"]
  },
  {
    id: 19,
    title: "React Lifecycle & useEffect",
    desc: "Perform side effects like fetching data, timers, and subscribing to browser events when components mount, update, or unmount.",
    tasks: ["Fetch API data inside useEffect hook", "Explain empty dependency arrays", "Clean up a window resize listener"]
  },
  {
    id: 20,
    title: "React Controlled Forms",
    desc: "Manage user inputs in React. Listen to onChange events, handle multiple inputs in a single state, and prevent default form submission.",
    tasks: ["Build a controlled input text component", "Manage form submit handler in React", "Display error messages on submit validations"]
  },
  {
    id: 21,
    title: "React Hooks (useRef & useMemo)",
    desc: "Learn advanced React hooks: useRef to access DOM elements directly without re-renders, and useMemo to cache expensive computation.",
    tasks: ["Focus an input element on page mount", "Track previous state using useRef", "Cache sorted arrays with useMemo"]
  },
  {
    id: 22,
    title: "React Router DOM & NavLink",
    desc: "Build multi-page user experiences. Set up BrowserRouter, Routes, Route parameters, and link transitions.",
    tasks: ["Install react-router-dom packages", "Map URL paths to page components", "Style active nav items with NavLink"]
  },
  {
    id: 23,
    title: "Tailwind CSS in React",
    desc: "Learn utility-first styling. Set up tailwind.config, import styles, and design beautiful responsive flex grids using class names.",
    tasks: ["Configure Tailwind CSS in React project", "Design layout using utility padding and margins", "Create a responsive flex grid layout"]
  },
  {
    id: 24,
    title: "State Management & Context API",
    desc: "Avoid prop drilling. Share global theme configs, user sessions, or cart details across nested components using React Context.",
    tasks: ["Create a context provider for global theme settings", "Consume context states in subcomponents", "Update shared state from child components"]
  },
  {
    id: 25,
    title: "Node.js Basics & NPM",
    desc: "Explore JavaScript on the backend. Learn file structures, running terminal commands, package.json scripts, and importing modules.",
    tasks: ["Run a Javascript file with Node in console", "Initialize package.json in a folder", "Import files with ESModules syntax"]
  },
  {
    id: 26,
    title: "REST APIs with Express",
    desc: "Build your first backend server. Learn Express routing, HTTP methods (GET, POST, PUT, DELETE), status codes, and request bodies.",
    tasks: ["Listen to local port 3000 in Express", "Build standard JSON API route endpoints", "Test response outputs with client tools"]
  },
  {
    id: 27,
    title: "Database Basics & MongoDB",
    desc: "Understand relational (SQL) vs document (NoSQL) databases. Set up an online database cluster and write database schemas.",
    tasks: ["Compare SQL with NoSQL architectures", "Initialize a cluster database connection", "Understand collections and document stores"]
  },
  {
    id: 28,
    title: "Introduction to Prisma ORM",
    desc: "Connect Express with databases using Prisma. Define database models in schema.prisma, configure database URL, and run migrations.",
    tasks: ["Install prisma and schema generators", "Write database models (User, Post)", "Run migrations to sync database schemas"]
  },
  {
    id: 29,
    title: "CRUD with Prisma Client",
    desc: "Write database operations in code. Implement prisma.findMany, prisma.create, prisma.update, and prisma.delete inside API routes.",
    tasks: ["Query all records from database", "Create new database entries on POST request", "Handle database error catch logic"]
  },
  {
    id: 30,
    title: "Backend Auth & JWT Tokens",
    desc: "Secure your endpoints. Learn passwords hashing (bcrypt), creating JSON Web Tokens, and writing middleware to authorize requests.",
    tasks: ["Hash passwords during user registration", "Sign JWT tokens on successful logins", "Write API middleware for private endpoints"]
  },
  {
    id: 31,
    title: "Deployment & Project Review",
    desc: "Launch your application live! Deploy backend services to Render/Railway, database to Neon, frontend to Vercel, and present your portfolio.",
    tasks: ["Deploy frontend build to hosting server", "Set environment variables in production settings", "Conduct final tests and checklist audits"]
  }
];

export default function PMVikas() {
  const [completedDays, setCompletedDays] = useState([]);
  const [activeDay, setActiveDay] = useState(null);
  const [dayChecklist, setDayChecklist] = useState({});
  const [dayNotes, setDayNotes] = useState({});

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const storedCompleted = localStorage.getItem('pmvikas_completed_days');
      if (storedCompleted) setCompletedDays(JSON.parse(storedCompleted));

      const storedChecklist = localStorage.getItem('pmvikas_checklist');
      if (storedChecklist) setDayChecklist(JSON.parse(storedChecklist));

      const storedNotes = localStorage.getItem('pmvikas_notes');
      if (storedNotes) setDayNotes(JSON.parse(storedNotes));
    } catch (e) {
      console.error('Error reading localStorage data', e);
    }
  }, []);

  // Save states to localStorage when they change
  const saveCompletedDays = (updated) => {
    setCompletedDays(updated);
    localStorage.setItem('pmvikas_completed_days', JSON.stringify(updated));
  };

  const toggleDayCompletion = (dayId) => {
    let updated;
    if (completedDays.includes(dayId)) {
      updated = completedDays.filter(id => id !== dayId);
    } else {
      updated = [...completedDays, dayId];
    }
    saveCompletedDays(updated);
  };

  const toggleChecklistItem = (dayId, taskIndex) => {
    const key = `${dayId}-${taskIndex}`;
    const updated = { ...dayChecklist, [key]: !dayChecklist[key] };
    setDayChecklist(updated);
    localStorage.setItem('pmvikas_checklist', JSON.stringify(updated));

    // If all tasks for this day are checked, auto-mark day as completed
    const day = DAYS_DATA.find(d => d.id === dayId);
    if (day) {
      const allChecked = day.tasks.every((_, idx) => updated[`${dayId}-${idx}`]);
      if (allChecked && !completedDays.includes(dayId)) {
        saveCompletedDays([...completedDays, dayId]);
      } else if (!allChecked && completedDays.includes(dayId)) {
        saveCompletedDays(completedDays.filter(id => id !== dayId));
      }
    }
  };

  const handleNotesChange = (dayId, text) => {
    const updated = { ...dayNotes, [dayId]: text };
    setDayNotes(updated);
    localStorage.setItem('pmvikas_notes', JSON.stringify(updated));
  };

  const totalCompleted = completedDays.length;
  const progressPercent = Math.round((totalCompleted / DAYS_DATA.length) * 100);

  return (
    <div className="page-fade-in">
      {/* Page Header */}
      <div className="pmvikas-header">
        <h2 className="info-section-title">
          <span className="title-decor"></span>
          <Calendar size={22} style={{ color: 'var(--primary)' }} />
          PM-VIKAS Information Hub
        </h2>
        <p>
          PM-VIKAS is an initiative dedicated to empowering youth through structural mentoring, 
          hands-on technology projects, and leadership skills. Monitor your syllabus progress 
          with this interactive daily tracking system.
        </p>
      </div>

      {/* Program Pillars */}
      <div className="mission-grid">
        <div className="mission-card">
          <div className="icon-holder">
            <BookOpen size={20} />
          </div>
          <h3>Structured Curriculum</h3>
          <p>31 days covering critical modern web development concepts from core semantic HTML to fullstack APIs and DB integrations.</p>
        </div>

        <div className="mission-card">
          <div className="icon-holder">
            <Award size={20} />
          </div>
          <h3>Hands-on Tasks</h3>
          <p>Every lesson includes targeted practical checklists to build real-world competency and coding confidence.</p>
        </div>

        <div className="mission-card">
          <div className="icon-holder">
            <CheckCircle size={20} />
          </div>
          <h3>Progress Tracker</h3>
          <p>Interactive tracking lets you log your tasks, save custom study notes, and view your course completion stats live.</p>
        </div>
      </div>

      {/* Tracker Dashboard Header */}
      <div className="tracker-section-header">
        <div>
          <h2 className="info-section-title" style={{ margin: 0 }}>
            <span className="title-decor"></span>
            <Clock size={22} style={{ color: 'var(--secondary)' }} />
            Daily Progress Tracker
          </h2>
        </div>
        <div className="tracker-stats-bar">
          <span className="progress-pill">
            {totalCompleted} of {DAYS_DATA.length} Days Completed ({progressPercent}%)
          </span>
          <div style={{
            width: '180px',
            height: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--secondary), #10b981)',
              borderRadius: '4px',
              transition: 'width 0.4s ease-out'
            }}></div>
          </div>
        </div>
      </div>

      {/* Days Grid */}
      <div className="grid-holder">
        {DAYS_DATA.map((day) => {
          const isCompleted = completedDays.includes(day.id);
          // Check if some tasks are done
          const someTasksDone = day.tasks.some((_, idx) => dayChecklist[`${day.id}-${idx}`]);
          const dayStatusClass = isCompleted 
            ? 'day-card completed' 
            : someTasksDone 
              ? 'day-card in-progress' 
              : 'day-card';

          return (
            <div
              key={day.id}
              className={dayStatusClass}
              onClick={() => setActiveDay(day)}
              id={`day-card-${day.id}`}
            >
              <div className="day-label">Day</div>
              <div className="day-number">{day.id}</div>
              <div className="day-status-indicator">
                <span className="status-dot"></span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Details Modal */}
      {activeDay && (
        <div className="modal-overlay" onClick={() => setActiveDay(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-area">
                <span className="modal-subtitle">Day {activeDay.id} Curriculum</span>
                <h3>{activeDay.title}</h3>
              </div>
              <button 
                className="close-btn" 
                onClick={() => setActiveDay(null)}
                aria-label="Close details"
                id="close-modal-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="modal-desc-box">
                <h4>Topic Description</h4>
                <p>{activeDay.desc}</p>
              </div>

              {/* Tasks Checklist */}
              <div className="checklist-title">
                <CheckSquare size={18} style={{ color: 'var(--secondary)' }} />
                Learning Goals & Tasks
              </div>
              <ul className="checklist-list">
                {activeDay.tasks.map((task, idx) => {
                  const itemKey = `${activeDay.id}-${idx}`;
                  const isChecked = !!dayChecklist[itemKey];
                  return (
                    <li 
                      key={idx} 
                      className="checklist-item"
                      onClick={() => toggleChecklistItem(activeDay.id, idx)}
                    >
                      <div className={`checklist-checkbox ${isChecked ? 'checked' : ''}`}>
                        {isChecked && <CheckCircle size={14} style={{ color: '#fff' }} />}
                      </div>
                      <span className={`checklist-text ${isChecked ? 'checked' : ''}`}>
                        {task}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Notes Area */}
              <div className="notes-area">
                <label className="notes-label" htmlFor="day-notes-input">
                  <Edit3 size={16} style={{ color: 'var(--primary)' }} />
                  My Study Notes
                </label>
                <textarea
                  id="day-notes-input"
                  className="notes-textarea"
                  placeholder="Type notes, references, or links here. Auto-saved!"
                  value={dayNotes[activeDay.id] || ''}
                  onChange={(e) => handleNotesChange(activeDay.id, e.target.value)}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button 
                className="btn-secondary" 
                onClick={() => setActiveDay(null)}
                id="modal-cancel-btn"
              >
                Close
              </button>
              <button
                className={`btn-primary ${completedDays.includes(activeDay.id) ? 'completed' : ''}`}
                onClick={() => {
                  toggleDayCompletion(activeDay.id);
                }}
                id="modal-complete-btn"
              >
                {completedDays.includes(activeDay.id) ? 'Mark Incomplete' : 'Complete Day'}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}