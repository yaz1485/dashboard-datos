// src/components/TablaDatos.jsx
import React from 'react';

export default function TablaDatos({ datos }) {
  // 1. Si no hay datos, mostramos un mensaje limpio
  if (!datos) {
    return <p style={{ textAlign: 'center', color: '#666' }}>Esperando datos del modelo analítico...</p>;
  }

  // 2. Si la API manda vectores (como el clima/ciencia de datos: hourly con time y temperature_2m)
  let filasParaMostrar = [];
  if (datos.time && datos.temperature_2m) {
    filasParaMostrar = datos.time.slice(0, 10).map((tiempo, index) => ({
      id: index + 1,
      categoria: 'Temperatura Horaria',
      valor: `${datos.temperature_2m[index]} °C`,
      anio: tiempo
    }));
  } else if (Array.isArray(datos)) {
    // Si es un arreglo tradicional de tus prácticas pasadas
    filasParaMostrar = datos;
  }

  if (filasParaMostrar.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>No hay registros disponibles en el dataset.</p>;
  }

  return (
    <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#ffffff', color: '#1e293b', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <thead>
          <tr style={{ background: '#0f172a', color: 'white', textAlign: 'left' }}>
            <th style={{ padding: '12px' }}># Registro</th>
            <th style={{ padding: '12px' }}>Métrica / Tipo</th>
            <th style={{ padding: '12px' }}>Valor Predicho</th>
            <th style={{ padding: '12px' }}>Marca Temporal</th>
          </tr>
        </thead>
        <tbody>
          {filasParaMostrar.map((item, index) => (
            <tr key={item.id || index} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '12px' }}>{item.id}</td>
              <td style={{ padding: '12px' }}>{item.categoria}</td>
              <td style={{ padding: '12px', fontWeight: '600', color: '#0284c7' }}>{item.valor}</td>
              <td style={{ padding: '12px' }}>{item.anio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}