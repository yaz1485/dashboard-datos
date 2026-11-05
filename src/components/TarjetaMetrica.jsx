// src/components/TarjetaMetrica.jsx
import React from 'react';

export default function TarjetaMetrica({ titulo, valor }) {
  return (
    <div style={{
      background: '#1e293b',
      color: 'white',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      flex: '1',
      minWidth: '200px',
      textAlign: 'center'
    }}>
      <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#94a3b8' }}>{titulo}</h4>
      <p style={{ margin: 0, fontSize: '1.8rem', fontWeight: 'bold', color: '#38bdf8' }}>{valor}</p>
    </div>
  );
}