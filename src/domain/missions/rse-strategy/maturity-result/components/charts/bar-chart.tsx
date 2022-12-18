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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Gouvernance', 'Droits de l\'homme', 'Relation et condition de travail', 'Environnement', 'Loyautes des pratiques' , 'Question relatives aux consommateurs', 'Communautes et developpement local'];

export const data = {
  labels,
  datasets: [
    {

      label: 'Resultat evaluation',
      data: [90, 23, 65, 34, 54, 65, 30],
      backgroundColor: [
        'rgba(33, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(35, 159, 64, 0.5)',
      ]
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data}  />;
}

export default BarChart
