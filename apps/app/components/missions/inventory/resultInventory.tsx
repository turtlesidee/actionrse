import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';


const data = {
  labels: [
    'La gouvernance',
    'Les droits de l’homme',
    'Les relations et les conditions de travail',
    'L’environnement',
    'Loyauté des pratiques',
    'Les questions relatives aux consommateurs',
    'Les communautés et le développement local'
  ],

  datasets: [
    {
      label: 'Maturité de votre politique RSE',
      data: [8, 4, 9, 5, 5, 7, 9],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,

    },
  ],
};
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



export function ResultInventory({ nextPage }) {

  return (
    <div>
      <h1 className="font-montserrat text-2xl uppercase text-center text-dark-liver mt-8 mb-16"> Compte rendu état des lieux</h1>
      <Radar className="w-1/4" data={data}  />
    </div>

  )
}
