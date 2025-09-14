function About() {
  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#ffffff',
      minHeight: '80vh'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#2c3e50',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          About Us
        </h1>
        <div style={{
          backgroundColor: '#ecf0f1',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '30px'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#34495e',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
            Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#34495e',
            lineHeight: '1.8'
          }}>
            With over three decades of experience, we have built a reputation for excellence and innovation. Our team of dedicated professionals works tirelessly to ensure that every client receives personalized solutions that drive real results.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '40px'
        }}>
          <div style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '10px' }}>30+ Years</h3>
            <p>of Excellence</p>
          </div>
          <div style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '10px' }}>500+</h3>
            <p>Happy Clients</p>
          </div>
          <div style={{
            backgroundColor: '#27ae60',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '10px' }}>1000+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
