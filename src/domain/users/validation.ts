import { z } from 'zod'

export enum Role {
  USER,
  EXPERT,
  COLLABORATOR,
  LEADER
}

export const user = z.object({
  id: z.number(),
  firstname: z.string().min(1).max(100),
  lastname: z.string().min(1).max(100),
  email: z.string().email().min(1).max(100),
})

export const search_user_mutation = z.object({
  name: z.string().min(1).max(100),
  role: z.string().min(1).max(100),
})
