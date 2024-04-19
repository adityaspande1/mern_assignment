import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0', 
        color: '#333', 
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          marginBottom: '30px',
          color: '#ff6600', 
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Control Menu
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link to="/products" style={{ textDecoration: 'none', margin: '0 10px' }}>
          <button
            style={{
              padding: '12px 25px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#ff6600', 
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxShadow: '0px 4px 10px rgba(255, 102, 0, 0.2)', 
            }}
            
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e65c00'} 
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6600'}
          >
            Product Management
          </button>
        </Link>
        <Link to="/users" style={{ textDecoration: 'none', margin: '0 10px' }}>
          <button
            style={{
              padding: '12px 25px', 
              fontSize: '1rem', 
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#ff6600', 
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxShadow: '0px 4px 10px rgba(255, 102, 0, 0.2)', 
            }}
           
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e65c00'} 
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6600'}
          >
            User Management
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
