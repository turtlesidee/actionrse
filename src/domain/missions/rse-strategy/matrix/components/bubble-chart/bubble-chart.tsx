import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import random_rgba, { colors } from "../../../../../../infrastructure/utils/random-rgba"
import { $add, $delete } from "../../../../../../infrastructure/utils/array"


ChartJS.register(LinearScale, PointElement, Tooltip, Legend);






type Props = {
  datasets: any[]
  selectedStakeholder: any[],
  setSelectedStakeholder: (stakeholder: any[]) => void
}

const BubbleChart = ({datasets, setSelectedStakeholder, selectedStakeholder}: Props) => {

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 20,
        beginAtZero: true,
        offset: true,
        title: {
          display: true,
          text: 'Partie prenante'
        }
      },
      x: {
        min: 0,
        max: 20,
        beginAtZero: true,
        offset: true,
        title: {
          display: true,
          text: 'Companie'
        }
      }
    },
    onClick: (e, elements) => {
    }
  };

  const data = {
    datasets: datasets
  };
  return <Bubble options={options} data={data} />;

}

export default BubbleChart;
