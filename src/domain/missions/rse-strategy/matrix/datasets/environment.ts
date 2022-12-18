import random_rgba from "../../../../../infrastructure/utils/random-rgba"

const dataset_init_environment = [
  {
    id: 'environment_1',
    label: 'Prévention de la pollution',
    data: [{ x: 0, y: 0, r: 10 }],
    backgroundColor: random_rgba(),
  },
  {
    id: 'environment_2',
    label: 'Utilisation durable des ressources',
    data: [{ x: 0, y: 0, r: 10 }],
    backgroundColor: random_rgba(),
  },
  {
    id: 'environment_3',
    label: 'Atténuation des changements climatiques et adaptation',
    data: [{ x: 0, y: 0, r: 10 }],
    backgroundColor: random_rgba(),
  },
  {
    id: 'environment_4',
    label: 'Protection de l\'environnement, biodiversité et réhabilitation des habitats naturels',
    data: [{ x: 0, y: 0, r: 10 }],
    backgroundColor: random_rgba(),
  },
]

export default dataset_init_environment
