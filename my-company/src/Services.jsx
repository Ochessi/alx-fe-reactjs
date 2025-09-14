function Services() {
  const services = [
    {
      title: "Technology Consulting",
      description: "Expert guidance on technology strategy, implementation, and optimization for your business needs.",
      icon: "💻"
    },
    {
      title: "Market Analysis",
      description: "Comprehensive market research and analysis to help you make informed business decisions.",
      icon: "📊"
    },
    {
      title: "Product Development",
      description: "End-to-end product development services from concept to launch and beyond.",
      icon: "🚀"
    }
  ];

  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#f8f9fa',
      minHeight: '80vh'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#2c3e50',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Our Services
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#7f8c8d',
          textAlign: 'center',
          marginBottom: '50px',
          maxWidth: '600px',
          margin: '0 auto 50px auto'
        }}>
          We offer a comprehensive range of services designed to help your business thrive in today's competitive market.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px'
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#2c3e50',
                marginBottom: '15px'
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#7f8c8d',
                lineHeight: '1.6'
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#3498db',
          color: 'white',
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '15px' }}>Ready to Get Started?</h3>
          <p style={{ marginBottom: '0' }}>Contact us today to discuss how we can help your business succeed.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
