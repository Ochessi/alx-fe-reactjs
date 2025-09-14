import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px', 
      margin: '20px', 
      border: '2px solid #ddd', 
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <p style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#333', 
        marginBottom: '20px' 
      }}>Current Count: {count}</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Increment
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
