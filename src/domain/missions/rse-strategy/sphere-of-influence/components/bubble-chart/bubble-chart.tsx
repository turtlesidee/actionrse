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

export const options = {
  scales: {
    y: {
      min: 0,
      max: 100,
      beginAtZero: true,
      offset: true,
      title: {
        text: 'Importance',
        display: true
      }
    },
    x: {
      min: 0,
      max: 100,
      beginAtZero: true,
      offset: true,
      title: {
        text: 'Support',
        display: true
      }
    }
  },
  onClick: (e, elements) => {
    console.log(elements)
  }
};




type Props = {
  stakeholders: {
    id: number,
    name: string,
    importance: number,
    influence: number,
    support: number
  }[],
  selectedStakeholder: any[],
  setSelectedStakeholder: (stakeholder: any[]) => void
}

const BubbleChart = ({stakeholders, setSelectedStakeholder, selectedStakeholder}: Props) => {

  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
        beginAtZero: true,
        offset: true,
        title: {
          text: 'Importance',
          display: true
        }
      },
      x: {
        min: 0,
        max: 100,
        beginAtZero: true,
        offset: true,
        title: {
          text: 'Support',
          display: true
        }
      }
    },
    onClick: (e, elements) => {
      if (elements.length > 0) {
        const { datasetIndex } = elements[0];
        const stake = stakeholders[datasetIndex]
        if (selectedStakeholder.includes(stake)) {

          const i = selectedStakeholder.indexOf(stake)
          setSelectedStakeholder($delete(selectedStakeholder, i))
        } else {
          if (selectedStakeholder.length < 3) {
            setSelectedStakeholder($add(selectedStakeholder, stake))
          } else {
            alert('Vous ne pouvez pas selectionner plus de 3 parties prenantes')
          }
        }

      }
    }
  };

  const data = {
    datasets: stakeholders.map((stakeholder, index) => ({
      label: stakeholder.name,
      data: [{ x: stakeholder.support, y: stakeholder.importance , r: stakeholder.influence / 2}],
      backgroundColor: colors[index],
    }))
  };
  return <Bubble options={options} data={data} />;

}

export default BubbleChart;
