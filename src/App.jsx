import React, { useState } from 'react';
import { obtenerDatosAnaliticos } from './services/dataService';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';

export default function App() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);

  const handleConsultarAPI = async () => {
    setCargando(true);
    setError(false);

    try {
      const resultado = await obtenerDatosAnaliticos();
      console.log("Datos obtenidos con éxito:", resultado); // Para revisar en F12
      setDatos(resultado);
    } catch (err) {
      console.error("Error en la petición:", err);
      setError(true);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Encabezado limpio sin elementos molestos */}
      <header style={{ textAlign: 'center', marginBottom: '25px' }}>
        <h1 style={{ fontSize: '26px', marginBottom: '10px', color: '#0f172a' }}>Práctica 3.3 - Integración con APIs de Ciencia de Datos</h1>
        <p style={{ color: '#64748b', margin: '0' }}>Panel Analítico con Manejo Asíncrono y Estados de Interfaz</p>
      </header>

      {/* Botón principal */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button 
          onClick={handleConsultarAPI}
          style={{ padding: '14px 28px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
        >
          {cargando ? 'Analizando datos...' : 'Consultar API Externa'}
        </button>
      </div>

      {/* Estado de Carga (Alerta Verde) */}
      {cargando && (
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', color: '#166534', border: '1px solid #bbf7d0', borderRadius: '6px', textAlign: 'center', marginBottom: '20px', fontWeight: '500' }}>
          ⏳ Analizando datos y procesando modelo... Por favor espere.
        </div>
      )}

      {/* Estado de Error (Alerta Roja) */}
      {error && (
        <div style={{ padding: '15px', backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fecaca', borderRadius: '6px', marginBottom: '20px', fontWeight: '500' }}>
          ❌ Error al conectar con el servicio de ciencia de datos. Revisa tu conexión o archivo .env.local.
        </div>
      )}

      {/* Resultados: Se muestran únicamente al presionar el botón y recibir los datos */}
      {datos && datos.latitude !== undefined && !cargando && (
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#334155' }}>Resultados del Modelo Analítico</h3>
          
          <section style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
            <TarjetaMetrica titulo="Latitud" valor={datos.latitude} />
            <TarjetaMetrica titulo="Longitud" valor={datos.longitude} />
            <TarjetaMetrica titulo="Elevación" valor={`${datos.elevation} msnm`} />
          </section>

          <section>
            <h4 style={{ marginBottom: '10px', color: '#334155' }}>Registros de Temperaturas Horarias</h4>
            <TablaDatos datos={datos.hourly} />
          </section>
        </div>
      )}
    </div>
  );
}