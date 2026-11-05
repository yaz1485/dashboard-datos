// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';
import { obtenerDatosVisualizacion, procesarDatos } from './services/dataService';

function App() {
  const [datosProcesados, setDatosProcesados] = useState({
    totalRegistros: 0,
    sumaValores: 0,
    promedio: 0,
    detalles: []
  });
  const [cargando, setCargando] = useState(true);

  // Hook useEffect para ejecutar la carga asíncrona al montar la app
  useEffect(() => {
    const cargarInformacion = async () => {
      try {
        const datosCrudos = await obtenerDatosVisualizacion();
        const resultadoProcesado = procesarDatos(datosCrudos);
        setDatosProcesados(resultadoProcesado);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarInformacion();
  }, []);

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      {/* Navbar que ya tenías de la práctica anterior */}
      <Navbar />

      <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h2>Panel de Análisis de Datos</h2>
          <p style={{ color: '#94a3b8' }}>Visualización de métricas y registros procesados desde la capa de servicios.</p>
        </header>

        {cargando ? (
          <p style={{ textAlign: 'center', color: '#38bdf8' }}>Cargando servicio de datos...</p>
        ) : (
          <>
            {/* Contenedor de Tarjetas Métricas (al menos 3 instancias) */}
            <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <TarjetaMetrica titulo="Total Registros" valor={datosProcesados.totalRegistros} />
              <TarjetaMetrica titulo="Suma Total" valor={datosProcesados.sumaValores} />
              <TarjetaMetrica titulo="Promedio General" valor={datosProcesados.promedio} />
            </section>

            {/* Instancia de la Tabla de Datos inyectando el estado */}
            <section>
              <h3 style={{ borderBottom: '2px solid #334155', paddingBottom: '0.5rem' }}>Detalle del Dataset</h3>
              <TablaDatos datos={datosProcesados.detalles} />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;