// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DashboardLayout from './components/DashboardLayout';
import PanelFiltros from './components/PanelFiltros';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';
import { obtenerDatosVisualizacion, procesarDatos } from './services/dataService';

function App() {
  const [datosCrudos, setDatosCrudos] = useState([]);
  const [datosProcesados, setDatosProcesados] = useState({
    totalRegistros: 0,
    sumaValores: 0,
    promedio: 0,
    detalles: []
  });
  
  // Estado global de los filtros requerido por la Práctica 4
  const [filtros, setFiltros] = useState({
    categoria: 'todas',
    anio: ''
  });

  const [cargando, setCargando] = useState(true);

  // 1. Carga inicial de datos al montar la aplicación
  useEffect(() => {
    const cargarDatosIniciales = async () => {
      try {
        const data = await obtenerDatosVisualizacion();
        setDatosCrudos(data);
        setDatosProcesados(procesarDatos(data, filtros));
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setCargando(false);
      }
    };
    cargarDatosIniciales();
  }, []);

  // 2. useEffect que "escucha" los cambios en el estado filtros en tiempo real
  useEffect(() => {
    if (datosCrudos.length > 0) {
      const resultadoFiltrado = procesarDatos(datosCrudos, filtros);
      setDatosProcesados(resultadoFiltrado);
    }
  }, [filtros, datosCrudos]);

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh' }}>
      <Navbar />
      <DashboardLayout>
        <header style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <h2>Dashboard Interactivo de Ciencia de Datos</h2>
          <p style={{ color: '#94a3b8' }}>Filtrado simultáneo de métricas, gráficos y tablas en tiempo real.</p>
        </header>

        {/* Panel de Filtros Interactivos */}
        <PanelFiltros filtros={filtros} setFiltros={setFiltros} />

        {cargando ? (
          <p style={{ textAlign: 'center', color: '#38bdf8' }}>Cargando dashboard...</p>
        ) : (
          <>
            {/* Tarjetas de Métricas Dinámicas */}
            <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <TarjetaMetrica titulo="Registros Filtrados" valor={datosProcesados.totalRegistros} />
              <TarjetaMetrica titulo="Suma del Dataset" valor={datosProcesados.sumaValores} />
              <TarjetaMetrica titulo="Promedio Filtrado" valor={datosProcesados.promedio} />
            </section>

            {/* Tabla de Datos Dinámica */}
            <section>
              <h3 style={{ borderBottom: '2px solid #334155', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                Detalle del Dataset Filtrado
              </h3>
              <TablaDatos datos={datosProcesados.detalles} />
            </section>
          </>
        )}
      </DashboardLayout>
    </div>
  );
}

export default App;