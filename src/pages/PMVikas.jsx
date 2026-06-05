export default function PMVikas() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section>
      <h2>PM-VIKAS Information</h2>
      <p>
        PM-VIKAS is an initiative focused on youth development and skill building. This
        page contains information about the program, goals, and benefits.
      </p>
      <ul>
        <li><strong>Program Name:</strong> PM-VIKAS</li>
        <li><strong>Mission:</strong> Empower young professionals through mentoring and project work</li>
        <li><strong>Key Areas:</strong> Leadership, career readiness, technology adoption</li>
        <li><strong>Outcomes:</strong> Improved employability, strong teamwork, and a growth mindset</li>
      </ul>

      <h3>Daily Progress Tracker</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px', marginTop: '20px' }}>
        {days.map(day => (
          <div 
            key={day} 
            style={{
              padding: '20px',
              border: '2px solid #007bff',
              borderRadius: '8px',
              textAlign: 'center',
              backgroundColor: '#f8f9fa',
              fontWeight: 'bold',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#007bff';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
              e.currentTarget.style.color = 'black';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Day {day}
          </div>
        ))}
      </div>
    </section>
  )
}