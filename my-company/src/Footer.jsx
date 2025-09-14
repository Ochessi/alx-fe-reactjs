function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '40px 0 20px 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '30px'
        }}>
          <div>
            <h3 style={{ marginBottom: '15px', color: '#3498db' }}>Our Company</h3>
            <p style={{ lineHeight: '1.6', color: '#bdc3c7' }}>
              Delivering excellence in technology, marketing, and consultancy since 1990.
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: '15px', color: '#3498db' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="/" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Home</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/about" style={{ color: '#bdc3c7', textDecoration: 'none' }}>About</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/services" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Services</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: '15px', color: '#3498db' }}>Contact Info</h3>
            <p style={{ color: '#bdc3c7', marginBottom: '8px' }}>📧 contact@ourcompany.com</p>
            <p style={{ color: '#bdc3c7', marginBottom: '8px' }}>📞 (555) 123-4567</p>
            <p style={{ color: '#bdc3c7' }}>📍 123 Business St, City, State 12345</p>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #34495e',
          paddingTop: '20px',
          textAlign: 'center',
          color: '#95a5a6'
        }}>
          <p>&copy; 2024 Our Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
