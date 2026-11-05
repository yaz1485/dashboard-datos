// src/services/dataService.js

// Dataset simulado con información para análisis de ciencia de datos
const datasetMock = [
  { id: 1, categoria: 'Región Norte', valor: 1450, anio: 2024 },
  { id: 2, categoria: 'Región Centro', valor: 2890, anio: 2024 },
  { id: 3, categoria: 'Región Sur', valor: 1920, anio: 2024 },
  { id: 4, categoria: 'Región Este', valor: 2150, anio: 2024 },
];

// Simula una petición HTTP devolviendo una Promesa
export const obtenerDatosVisualizacion = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datasetMock);
    }, 500); // Retardo simulado de medio segundo
  });
};

// Procesa y formatea los datos para prepararlos en las visualizaciones
export const procesarDatos = (datos) => {
  const totalRegistros = datos.length;
  const sumaValores = datos.reduce((acc, curr) => acc + curr.valor, 0);
  const promedio = sumaValores / totalRegistros || 0;

  return {
    totalRegistros,
    sumaValores,
    promedio: promedio.toFixed(2),
    detalles: datos,
  };
};