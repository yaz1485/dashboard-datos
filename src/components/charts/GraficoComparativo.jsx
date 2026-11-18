// src/components/charts/GraficoComparativo.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GraficoComparativo({ datos }) {
  const labels = datos.map(item => item.categoria);
  const values = datos.map(item => item.valor);

  const data = {
    labels,
    datasets: [
      {
        label: 'Comparativa por Categoría',
        data: values,
        backgroundColor: ['#38bdf8', '#818cf8', '#c084fc', '#f472b6'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: 'white' } },
      title: { display: true, text: 'Distribución Comparativa de Datos', color: 'white' },
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
    },
  };

  return (
    <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <Bar data={data} options={options} />
    </div>
  );
}
