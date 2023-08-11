import {
  ArcElement,
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);
export function LineChart() {
  const labels = getLastYearMonth();
  const options = {
    resposive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: [1, 2, 3, 44, 444, 654],
        borderColor: 'rgba(107,70,193,0.5)',
        backgroundColor: '#6b46c1',
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export const DoughnutChart = () => {
  const data = {
    labels: ['Subscribed', 'Not subscribed'],
    datasets: [
      {
        label: 'Views',
        data: [3, 20],
        borderColor: ['rgba(62,12,171)', 'rgba(214,43,129)'],
        backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
};

function getLastYearMonth() {
  const label = [];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const currentMonth = new Date().getMonth();
  const remain = 11 - currentMonth;
  console.log(currentMonth, 'this current month');
  for (let i = currentMonth; i < months.length; i--) {
    const element = months[i];
    label.unshift(element);
    if (i === 0) break;
  }
  console.log(label);

  for (let i = 11; i > remain; i--) {
    if (i === currentMonth) break;
    const element = months[i];
    label.unshift(element);
  }
  return label;
}
getLastYearMonth();
