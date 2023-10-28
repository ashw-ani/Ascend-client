import React from 'react';
import styles from './Chartcontainer.module.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chartcontainer = () => {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        labels: 'Sales of the week',
        data: [3, 8, 2, 4.3, 12, 2, 4, 4],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointerBorderColor: 'aqua',
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 12,
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chartcontainer;
