import { z } from "zod"
import { resolver } from "@blitzjs/rpc"
import rse_strategy_repository from "../../../../infrastructure/repositories/rse_strategy_repository"

export const create_rse_stakeholder_quizz = z.object({
  id: z.number().min(1),
  public_id: z.any(),
  answers: z.any()
})

export default resolver.pipe(resolver.zod(create_rse_stakeholder_quizz), async (data, ctx) => {
  await rse_strategy_repository.create_stakeholders_quizz(data.id, data.public_id, data.answers)
});
