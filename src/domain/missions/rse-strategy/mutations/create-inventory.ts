import { z } from "zod"
import { resolver } from "@blitzjs/rpc"
import rse_strategy_repository from "../../../../infrastructure/repositories/rse_strategy_repository"
import { action } from "../inventory/validations"

export const create_inventory = z.object({
  id: z.number().min(1),
  actions: z.array(action),

})

export default resolver.pipe(resolver.zod(create_inventory), async (data, ctx) => {
  await rse_strategy_repository.create_inventory(data.id, data.actions)
});
