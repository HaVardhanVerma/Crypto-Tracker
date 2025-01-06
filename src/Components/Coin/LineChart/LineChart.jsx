import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Loader from '../../../Common/Loader/Loader';

// Register the required components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
      crypto2: multiAxis && {
        position: "right",
      },
    },
  };

  // Ensure chartData is defined before rendering the chart
  if (!chartData || !chartData.datasets) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
