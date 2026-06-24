import { useState, useEffect } from 'react'
import { Calendar, Award, CheckCircle, Clock, BookOpen, X, CheckSquare, Edit3 } from 'lucide-react'

// Full 31-day developer curriculum mapping to PM-VIKAS goals
const DAYS_DATA = [
  {
    id: 1,
    title: "Basics of Digital Electronics",
    desc: "Learn the fundamentals of digital electronics, including number systems, logic gates, Boolean algebra, and basic combinational circuits.",
    tasks: ["Study number systems (Binary, Hexadecimal)", "Understand basic logic gates & truth tables", "Apply Boolean algebra to simplify circuits"]
  },
  {
    id: 2,
    title: "Simulation of Circuits in CircuitVerse",
    desc: "Learn to design, simulate, and debug digital logic circuits using the online tool CircuitVerse. Build combinational logic like adders and multiplexers.",
    tasks: ["Create account and learn CircuitVerse interface", "Design a Half-Adder and Full-Adder circuit", "Simulate a 2-to-1 Multiplexer and verify truth tables"]
  },
  {
    id: 3,
    title: "Microcontrollers and Microprocessors",
    desc: "Understand the core architecture differences between microprocessors (CPU, external RAM/ROM) and microcontrollers (all-in-one SOC). Learn about instruction sets and basic interfacing.",
    tasks: ["Compare CPU and MCU architectures", "Learn register-level configuration concepts", "Understand GPIO (General Purpose Input/Output) operation"]
  },
  {
    id: 4,
    title: "Simulation in Proteus and Keil",
    desc: "Write firmware in Keil C/assembly and simulate your microcontrollers using Proteus Virtual System Modeling. Learn how to debug code on virtual hardware.",
    tasks: ["Set up a workspace in Keil uVision IDE", "Write a basic LED blinking program in C/assembly", "Design a circuit in Proteus and simulate the LED blinking"]
  },
  {
    id: 5,
    title: "Computer Networking",
    desc: "Explore the fundamentals of computer networking, IP addressing, routing, switching, and common network topologies.",
    tasks: ["Understand IPv4 and IPv6 addressing", "Compare LAN, WAN, and MAN network types", "Learn about network devices like switches and routers"]
  },
  {
    id: 6,
    title: "Data Communication",
    desc: "Learn how data is transmitted between nodes. Explore serial and parallel communication, transmission media, and communication protocols (UART, SPI, I2C).",
    tasks: ["Compare Serial and Parallel communication speed & reliability", "Understand UART, SPI, and I2C protocols", "Study transmission media like fiber optics and twisted pair cables"]
  },
  {
    id: 7,
    title: "Cisco Packet Tracer",
    desc: "Use Cisco Packet Tracer to model, configure, and simulate complex network topologies. Learn to configure switches and routers using the CLI.",
    tasks: ["Build a basic network topology with PCs and a switch", "Configure router IP addresses and static routing", "Use ping and traceroute to verify network connectivity"]
  },
  {
    id: 8,
    title: "OSI Model",
    desc: "Study the 7 layers of the Open Systems Interconnection model. Understand data encapsulation and how protocols operate at each layer.",
    tasks: ["Memorize the 7 layers of the OSI model", "Understand the function of the Physical, Network, and Transport layers", "Map protocols like HTTP, TCP, IP, and Ethernet to their respective layers"]
  },
  {
    id: 9,
    title: "Cloud Computing",
    desc: "Learn cloud computing paradigms: IaaS, PaaS, SaaS. Explore cloud providers (AWS, Azure, GCP) and services like virtual machines, storage, and serverless.",
    tasks: ["Compare IaaS, PaaS, and SaaS models", "Understand cloud storage and database basics", "Explore virtual machines and compute hosting"]
  },
  {
    id: 10,
    title: "Introduction to Docker",
    desc: "Understand containerization concepts. Learn how to write a Dockerfile, build images, and run containers to ensure application portability.",
    tasks: ["Learn difference between Virtual Machines and Containers", "Write a simple Dockerfile", "Build and run a container locally"]
  },
  {
    id: 11,
    title: "Introduction to Tour of Go",
    desc: "Begin your Go programming journey with the official interactive Tour of Go. Learn basic syntax, variables, and primitive types in Go.",
    tasks: ["Complete the basic syntax section on the Tour of Go", "Write your first Go program printing to console", "Explore Go variables, constants, and type declarations"]
  },
  {
    id: 12,
    title: "Ubuntu in Detail",
    desc: "Master the Ubuntu Linux operating system. Learn package management, user administration, file permissions, and advanced shell scripting.",
    tasks: ["Learn APT package manager commands (install, update, remove)", "Understand Linux file permissions (chmod, chown)", "Write a basic bash script to automate file backups"]
  },
  {
    id: 13,
    title: "Introduction to GoLang",
    desc: "Learn GoLang flow control statements, structures, slices, maps, methods, and interfaces. Understand what makes Go powerful for system-level programming.",
    tasks: ["Write if/else, for loops, and switch statements in Go", "Define Go structs and use slices to manage lists of data", "Implement a simple Go interface and dynamic methods"]
  },
  {
    id: 14,
    title: "Communication Protocols",
    desc: "Study the design, specifications, and applications of key networking and hardware communication protocols such as HTTP, TCP, UDP, MQTT, UART, and I2C.",
    tasks: ["Compare connection-oriented TCP with connectionless UDP", "Understand MQTT publish-subscribe mechanism for IoT", "Differentiate physical layer serial protocols like I2C, SPI, and UART"]
  },
  {
    id: 15,
    title: "Introduction to Arduino",
    desc: "Get familiar with the Arduino development ecosystem. Learn the structure of an Arduino sketch, setup & loop functions, and basic GPIO control.",
    tasks: ["Set up and navigate the Arduino IDE", "Understand the anatomy of an Arduino sketch (setup vs loop)", "Write a simple program to blink an on-board LED"]
  },
  {
    id: 16,
    title: "Simulation of Ten Actuators in Tinkercad",
    desc: "Simulate and control 10 different electronic actuators (e.g., servo motors, DC motors, piezo buzzers, LCD displays) in Tinkercad.",
    tasks: ["Learn what actuators are and how they interact with microcontrollers", "Connect and code a Servo Motor in Tinkercad", "Assemble and simulate at least 10 actuators in Tinkercad"]
  },
  {
    id: 17,
    title: "Simulation of Ten Sensors in Tinkercad",
    desc: "Simulate and read inputs from 10 different sensors (e.g., ultrasonic range finder, PIR motion sensor, temperature sensor, LDR) in Tinkercad.",
    tasks: ["Differentiate between analog and digital sensor inputs", "Build a Tinkercad circuit measuring distance with an ultrasonic sensor", "Configure and read telemetry from 10 sensors in Tinkercad"]
  },
  {
    id: 18,
    title: "Continuation of Day 17",
    desc: "Deepen your understanding of sensors in Tinkercad. Learn how to calibrate analog sensor readings, handle noise, and process multi-sensor inputs.",
    tasks: ["Calibrate raw analog sensor readings to standard units (e.g., Celsius, Lux)", "Implement software smoothing/filtering for sensor noise", "Simulate a multi-sensor array in Tinkercad"]
  },
  {
    id: 19,
    title: "Embedded C",
    desc: "Learn the fundamentals of Embedded C programming. Understand memory mapping, pointer manipulations, bitwise operations, and register configurations.",
    tasks: ["Practice bitwise operations (AND, OR, XOR, NOT, shift) in C", "Understand how pointers map to memory registers", "Configure hardware peripherals using register masks"]
  },
  {
    id: 20,
    title: "Simulation of Circuits with One Sensor and One Actuator",
    desc: "Build logic-driven feedback loop circuits in Tinkercad where sensor readings directly trigger actuator responses (e.g., LDR controlling a servo, temperature sensor activating a motor).",
    tasks: ["Design a smart lighting circuit where LDR brightness controls an LED/Servo", "Write feedback logic mapping input sensor range to output actuator range", "Simulate the integrated sensor-actuator circuit in Tinkercad"]
  },
  {
    id: 21,
    title: "Continuation of Day 20",
    desc: "Build on Day 20 by designing more complex feedback loops combining multiple sensors with multiple actuators, creating responsive micro-systems.",
    tasks: ["Implement non-blocking logic using millis() instead of delay()", "Integrate a secondary alarm system (buzzer/LED) with the primary actuator", "Simulate the multi-device closed-loop system in Tinkercad"]
  },
  {
    id: 22,
    title: "Embedded C Continuation",
    desc: "Advanced Embedded C concepts. Master interrupts, timers, Pulse Width Modulation (PWM), and hardware serial communication setup.",
    tasks: ["Write an Interrupt Service Routine (ISR) in C", "Configure timer registers to trigger precise events", "Generate variable duty-cycle PWM signals to control motor speeds"]
  },
  {
    id: 23,
    title: "Website Development",
    desc: "Learn the fundamentals of front-end web development, building responsive, user-friendly layouts using HTML5, CSS3, and JavaScript.",
    tasks: ["Create a structured responsive web layout", "Apply CSS styling with flexbox and media queries", "Add interactive behaviour using vanilla Javascript DOM manipulation"]
  },
  {
    id: 24,
    title: "Network Topologies",
    desc: "Understand different physical and logical layout configurations of networks. Compare Star, Mesh, Ring, Bus, and Hybrid topologies for cost, redundancy, and performance.",
    tasks: ["Compare star, mesh, and bus network structures", "Design a redundant network layout for high availability", "Understand physical cabling vs logical traffic routing in topologies"]
  },
  {
    id: 25,
    title: "Introduction to ESP32",
    desc: "Explore the ESP32 system-on-chip. Learn about its dual-core CPU, integrated Wi-Fi and Bluetooth capabilities, pinout diagram, and dev board variants.",
    tasks: ["Analyze the ESP32 pinout diagram and peripheral features", "Set up the ESP32 board support packages in IDE", "Configure a basic Wi-Fi connection in station mode"]
  },
  {
    id: 26,
    title: "ESP IDF",
    desc: "Get started with the official Espressif IoT Development Framework (ESP-IDF). Learn the project structure, compilation toolchain, and FreeRTOS basics.",
    tasks: ["Install and configure the ESP-IDF CLI toolchain", "Create, compile, and flash a basic ESP-IDF template project", "Understand task scheduling and queue mechanisms in FreeRTOS"]
  },
  {
    id: 27,
    title: "Simulation in Wokwi",
    desc: "Use the online simulator Wokwi to run and debug ESP32 projects. Simulate hardware connections, displays, and Wi-Fi networks in real-time.",
    tasks: ["Learn the Wokwi diagram.json configuration format", "Build an ESP32 circuit simulated in Wokwi", "Debug firmware running in the browser simulator"]
  },
  {
    id: 28,
    title: "Introduction to Raspberry Pi",
    desc: "Introduction to Single Board Computers (SBCs). Learn about the Raspberry Pi architecture, operating systems (Raspberry Pi OS), and GPIO control with Python.",
    tasks: ["Compare Microcontrollers (MCU) with Single Board Computers (SBC)", "Flash and configure Raspberry Pi OS on an SD card", "Write a Python script to control Raspberry Pi GPIO pins"]
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