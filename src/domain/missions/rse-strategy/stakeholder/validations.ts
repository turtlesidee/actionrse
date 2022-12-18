import { z } from "zod";


export const stakeholder_name = z.string().min(1).max(100);
export const stakeholder_email = z.string().email().min(1).max(100);
export const stakeholder_state = z.enum(['intern', 'extern']);
export const stakeholder_importance = z.number().min(1).max(100);
export const stakeholder_influence = z.number().min(1).max(100);
export const stakeholder_support = z.number().min(1).max(100);
export const stakeholder = z.object({
  name: stakeholder_name,
  email: stakeholder_email,
  state: stakeholder_state,
  importance: stakeholder_importance,
  influence: stakeholder_influence,
  support: stakeholder_support,
})

export type Stakeholder = z.infer<typeof stakeholder>


