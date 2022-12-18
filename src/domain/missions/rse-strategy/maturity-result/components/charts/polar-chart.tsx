import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
export const data = {
  labels: ['Gouvernance', 'Droits de l\'homme', 'Relation et condition de travail', 'Environnement', 'Loyautes des pratiques' , 'Question relatives aux consommateurs', 'Communautes et developpement local'],
  datasets: [
    {
      label: 'Maturité',
      data: [90, 23, 65, 34, 54, 65, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(35, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const PolarChart = () => {
  return <PolarArea data={data} />;
}

export default PolarChart
