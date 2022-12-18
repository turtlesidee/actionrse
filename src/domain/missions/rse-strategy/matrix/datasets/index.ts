import dataset_init_laws from "./laws"
import dataset_init_work from "./work"
import dataset_init_environment from "./environment"
import dataset_init_loyalty from "./loyalty"
import dataset_init_consumer from "./consumer"
import dataset_init_community from "./community"

const dataset_init = [
  ...dataset_init_laws,
  ...dataset_init_work,
  ...dataset_init_environment,
  ...dataset_init_loyalty,
  ...dataset_init_consumer,
  ...dataset_init_community
]

export default dataset_init
