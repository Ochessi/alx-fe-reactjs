import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navStyle = {
    backgroundColor: '#2c3e50',
    padding: '15px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
  };

  const logoStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '30px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#3498db',
    fontWeight: 'bold'
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          Our Company
        </Link>
        <ul style={navLinksStyle}>
          <li>
            <Link 
              to="/" 
              style={isActive('/') ? activeLinkStyle : linkStyle}
              onMouseOver={(e) => {
                if (!isActive('/')) {
                  e.target.style.backgroundColor = '#34495e';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive('/')) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              style={isActive('/about') ? activeLinkStyle : linkStyle}
              onMouseOver={(e) => {
                if (!isActive('/about')) {
                  e.target.style.backgroundColor = '#34495e';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive('/about')) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              style={isActive('/services') ? activeLinkStyle : linkStyle}
              onMouseOver={(e) => {
                if (!isActive('/services')) {
                  e.target.style.backgroundColor = '#34495e';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive('/services')) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              style={isActive('/contact') ? activeLinkStyle : linkStyle}
              onMouseOver={(e) => {
                if (!isActive('/contact')) {
                  e.target.style.backgroundColor = '#34495e';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive('/contact')) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
