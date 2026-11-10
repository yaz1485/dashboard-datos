import axios from 'axios';

export const obtenerDatosAnaliticos = async () => {
  try {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: 19.32,
        longitude: -98.98,
        hourly: 'temperature_2m,relativehumidity_2m'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Detalle del error:", error);
    throw new Error('Error al conectar con el servicio de ciencia de datos.');
  }
};