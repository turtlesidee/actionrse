import { resolver } from "@blitzjs/rpc"
import rse_strategy_repository from "../../../../infrastructure/repositories/rse_strategy_repository"
import { $update } from "../../../../infrastructure/utils/array"
import dataset_init from "../matrix/datasets"


const sum = [
  {
    id: 'laws',
    count: 0
  },
  {
    id: 'work',
    count: 0
  },
  {
    id: 'environment',
    count: 0
  },
  {
    id: 'loyalty',
    count: 0
  },
  {
    id: 'consumer',
    count: 0
  },
  {
    id: 'community',
    count: 0
  },
  ]

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


export default resolver.pipe(async (id: number, ctx) => {
  const [company_data, stakeholders_data] = await rse_strategy_repository.get_matrix_data(id)

  type Data = {
    id: string
    value: number
  }

  //@ts-ignore
  const normalize_data_company = company_data.map((data) => {
    return {
      id: `${data.question.type}_${data.question.subtype}`,
      value: data.value,
    }
  })

  // @ts-ignore
  const normalize_data_stakeholder = stakeholders_data.map((stakeholder) => {
    return {
      id: `${stakeholder.question.type}_${stakeholder.question.subtype}`,
      value: stakeholder.value,
    }
  }).reduce((acc, curr) => {
    const ind = acc.findIndex(item => item.id === curr.id)
    if (ind === -1) {
      return [...acc, curr]
    } else {
      return $update(acc, ind, (i) => ({ id: i.id, value: i.value + curr.value}))
    }

  }, [] as Data[]).map((data) => ({
    id: data.id,
    value: data.value / 3
  }))

  const j = normalize_data_company.reduce((acc, val) => {
    const type = val.id
    const index = acc.findIndex((item) => item.id === type)
    if (index === -1) {
      return acc;
    }

    const stake = normalize_data_stakeholder.find((item) => item.id === type)

    // @ts-ignore
    return $update(acc, index, (i) => ({ ...i, data: [{x: val.value * getRandomArbitrary(0.8, 1), y: stake.value, r: val.value + stake.value }] }))

  }, dataset_init)

  console.log(j)
  return j
})

