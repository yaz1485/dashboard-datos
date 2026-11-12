// src/components/PanelFiltros.jsx
import React from 'react';

export default function PanelFiltros({ filtros, setFiltros }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [name]: value
    }));
  };

  return (
    <div style={{
      background: '#1e293b',
      padding: '1rem 1.5rem',
      borderRadius: '8px',
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{ margin: 0, color: '#38bdf8', fontSize: '1rem' }}>Filtros del Sistema:</h4>
      
      {/* Filtro por Categoría / Región */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <label style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Región / Categoría:</label>
        <select 
          name="categoria" 
          value={filtros.categoria} 
          onChange={handleChange}
          style={{ padding: '0.5rem', borderRadius: '4px', background: '#0f172a', color: 'white', border: '1px solid #334155' }}
        >
          <option value="todas">Todas las regiones</option>
          <option value="Región Norte">Región Norte</option>
          <option value="Región Centro">Región Centro</option>
          <option value="Región Sur">Región Sur</option>
          <option value="Región Este">Región Este</option>
        </select>
      </div>

      {/* Filtro por Año o Búsqueda */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <label style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Año de Análisis:</label>
        <input 
          type="text" 
          name="anio" 
          value={filtros.anio} 
          onChange={handleChange}
          placeholder="Ej. 2024"
          style={{ padding: '0.5rem', borderRadius: '4px', background: '#0f172a', color: 'white', border: '1px solid #334155' }}
        />
      </div>
    </div>
  );
}