export default function Home() {
  return (
    <section style={{ padding: '24px', textAlign: 'center' }}>
      <div style={{ marginBottom: '24px' }}>
        <img 
          src="https://lh3.googleusercontent.com/d/1QtfYOAz0dW_example" 
          alt="Profile Picture" 
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #E1E0CC'
          }}
        />
      </div>
      <h2>Personal Information</h2>
      <p>Hello! Welcome to my personal page.</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '12px' }}><strong>Name:</strong> LIJIN C SKARIA</li>
        <li style={{ marginBottom: '12px' }}><strong>Location:</strong> PAMPADY</li>
        <li style={{ marginBottom: '12px' }}><strong>Profession:</strong> STUDENT</li>
        <li><strong>Interests:</strong> PROGRAMING</li>
      </ul>
    </section>
  )
}
