import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#1e293b', padding: '1rem 2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Dashboard de Ciencia de Datos</h2>
      <span style={{ fontSize: '1rem', fontWeight: '500' }}>Jessica Monroy</span>
    </nav>
  );
}

export default Navbar;