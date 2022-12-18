import { z } from 'zod';
import { stakeholder } from "./validations"
export const stakeholder_form = z.array(stakeholder)


export type StakeholderForm = z.infer<typeof stakeholder_form>

export const initial_values = {
    stakeholders: [] as StakeholderForm[],
}

export const on_submit = (mission_id: number, update_step: any, fn: any) => async (values: any) => {

  await fn({ id: mission_id, stakeholders: values.stakeholders })
  update_step(6)
}
