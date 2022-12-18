import { z } from 'zod'


export const motive = z.object({
  name: z.string().min(1).max(100),
})
export type Motive = z.infer<typeof motive>

export const strategy = z.object({
  name: z.string().min(1).max(100),
})
export type Strategy = z.infer<typeof strategy>
