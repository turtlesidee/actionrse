import { z } from "zod"
import { resolver } from "@blitzjs/rpc"
import rse_strategy_repository from "../../../../infrastructure/repositories/rse_strategy_repository"

export const create_identification = z.object({
  id: z.number().min(1),
  motives: z.array(z.object({ name: z.string().min(1).max(100)} )),
  strategies: z.array(z.object({ name: z.string().min(1).max(100)} )),
})

export default resolver.pipe(resolver.zod(create_identification), async (data, ctx) => {
  await rse_strategy_repository.create_identification(data.id, data.motives, data.strategies)
});
