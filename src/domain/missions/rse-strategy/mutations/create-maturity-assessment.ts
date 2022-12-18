import { z } from "zod"
import { resolver } from "@blitzjs/rpc"
import rse_strategy_repository from "../../../../infrastructure/repositories/rse_strategy_repository"

export const create_rse_assessment = z.object({
  id: z.number().min(1),
  answers: z.any()
})

export default resolver.pipe(resolver.zod(create_rse_assessment), async (data, ctx) => {
  await rse_strategy_repository.create_maturity_assessment(data.id, data.answers)
});
