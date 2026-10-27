import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h3>Bienvenido al entorno de desarrollo frontend</h3>
        <p>Proyecto base configurado correctamente para Ciencia de Datos.</p>
      </main>
    </div>
  );
}

export default App;