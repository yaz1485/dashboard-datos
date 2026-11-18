// src/services/dataService.js

const datasetMock = [
  { id: 1, categoria: 'Región Norte', valor: 1450, anio: '2024' },
  { id: 2, categoria: 'Región Centro', valor: 2890, anio: '2024' },
  { id: 3, categoria: 'Región Sur', valor: 1920, anio: '2024' },
  { id: 4, categoria: 'Región Este', valor: 2150, anio: '2024' },
];

export const obtenerDatosVisualizacion = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datasetMock);
    }, 300);
  });
};

export const procesarDatos = (datosCrudos, filtros) => {
  const datosFiltrados = datosCrudos.filter(item => {
    const coincideCategoria = filtros.categoria === 'todas' || item.categoria === filtros.categoria;
    const coincideAnio = !filtros.anio || item.anio.toString().includes(filtros.anio);
    return coincideCategoria && coincideAnio;
  });

  const totalRegistros = datosFiltrados.length;
  const sumaValores = datosFiltrados.reduce((acc, curr) => acc + curr.valor, 0);
  const promedio = totalRegistros > 0 ? (sumaValores / totalRegistros) : 0;

  return {
    totalRegistros,
    sumaValores,
    promedio: promedio.toFixed(2),
    detalles: datosFiltrados,
  };
};

// Nueva función de mapeo requerida para la Práctica 5
export const formatearParaGrafico = (datosCrudos) => {
  if (!datosCrudos || datosCrudos.length === 0) {
    return { labels: [], values: [] };
  }

  const labels = datosCrudos.map(item => item.categoria);
  const values = datosCrudos.map(item => item.valor);

  return { labels, values };
};