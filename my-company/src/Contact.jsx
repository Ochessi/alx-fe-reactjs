import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been received. We'll get back to you soon.`);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#ffffff',
      minHeight: '80vh'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#2c3e50',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Contact Us
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#7f8c8d',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ 
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #bdc3c7',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ 
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #bdc3c7',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#2c3e50',
                fontWeight: 'bold'
              }}>
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{ 
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #bdc3c7',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
              />
            </div>

            <button 
              type="submit"
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
            >
              Send Message
            </button>
          </form>
        </div>

        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#7f8c8d'
        }}>
          <p>Or reach us directly:</p>
          <p>📧 contact@ourcompany.com | 📞 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
