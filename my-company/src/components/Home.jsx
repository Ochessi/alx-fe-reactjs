function Home() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#2c3e50',
        marginBottom: '20px',
        fontWeight: 'bold'
      }}>
        Welcome to Our Company
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#34495e',
        maxWidth: '600px',
        lineHeight: '1.6',
        margin: '0 auto'
      }}>
        We are dedicated to delivering excellence in all our services. 
        Our commitment to quality and innovation has made us a trusted 
        partner for businesses worldwide.
      </p>
      <div style={{
        marginTop: '30px',
        padding: '15px 30px',
        backgroundColor: '#3498db',
        color: 'white',
        borderRadius: '5px',
        fontSize: '1.1rem',
        fontWeight: 'bold'
      }}>
        Your Success is Our Mission
      </div>
    </div>
  );
}

export default Home;
