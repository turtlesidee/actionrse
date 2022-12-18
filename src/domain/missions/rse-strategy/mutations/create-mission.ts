import { z } from 'zod'
import { resolver } from "@blitzjs/rpc"
import rse_strategy_repository  from "../../../../infrastructure/repositories/rse_strategy_repository"

export const create_mission = z.object({
    company_id: z.number().min(1),
})

export type CreateMission = z.infer<typeof create_mission>

export type CreateMissionResponse = any
export default resolver.pipe(resolver.zod(create_mission), async (data, ctx): Promise<CreateMissionResponse> => {
  await rse_strategy_repository.create_rse_mission(data.company_id)
});
