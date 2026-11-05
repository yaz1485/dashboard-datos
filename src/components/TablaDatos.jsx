// src/components/TablaDatos.jsx
import React from 'react';

export default function TablaDatos({ datos }) {
  if (!datos || datos.length === 0) {
    return <p style={{ textAlign: 'center' }}>Cargando datos del dataset...</p>;
  }

  return (
    <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#ffffff', color: '#1e293b', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ background: '#0f172a', color: 'white', textAlign: 'left' }}>
            <th style={{ padding: '12px' }}>ID</th>
            <th style={{ padding: '12px' }}>Categoría / Región</th>
            <th style={{ padding: '12px' }}>Valor</th>
            <th style={{ padding: '12px' }}>Año</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '12px' }}>{item.id}</td>
              <td style={{ padding: '12px' }}>{item.categoria}</td>
              <td style={{ padding: '12px', fontWeight: '600' }}>{item.valor}</td>
              <td style={{ padding: '12px' }}>{item.anio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}