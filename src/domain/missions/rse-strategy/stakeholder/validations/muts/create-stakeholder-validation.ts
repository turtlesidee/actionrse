import { stakeholder_form } from "../../logic"
import { z } from 'zod'
export const create_stakeholder = z.array(stakeholder_form)
export type CreateStakeholder = z.infer<typeof create_stakeholder>

export type CreateStakeholderResponse = any
export type CreateStakeholderFn = (input: CreateStakeholder) => Promise<CreateStakeholderResponse>
