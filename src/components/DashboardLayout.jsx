// src/components/DashboardLayout.jsx
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      minHeight: '100vh',
      background: '#0f172a',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      {/* Área principal del panel con diseño adaptable */}
      <main style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {children}
      </main>
    </div>
  );
}