import { z } from "zod"
import { action } from "../inventory/validations"
import { resolver } from "@blitzjs/rpc"
import rse_strategy_repository from "../../../../infrastructure/repositories/rse_strategy_repository"

export const choose_stakeholder = z.object({
  id: z.number().min(1),
  stakeholder_ids: z.array(z.number().min(1)),

})

export default resolver.pipe(resolver.zod(choose_stakeholder), async (data, ctx) => {
  await rse_strategy_repository.choose_stakeholders(data.id, data.stakeholder_ids)
});
