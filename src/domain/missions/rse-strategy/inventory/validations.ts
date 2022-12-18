import { z } from 'zod';

export const action_name = z.string().min(1).max(100);
export const action_type = z.enum(['gouvernance', 'laws', 'work', 'environment', 'loyalty', 'consumer','community'])

export const action = z.object({
  name: action_name,
  type: action_type
})

export type Action = z.infer<typeof action>
