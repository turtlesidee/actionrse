import { resolver } from "@blitzjs/rpc"
import rse_strategy_repository from "../../../../infrastructure/repositories/rse_strategy_repository"

export default resolver.pipe(async (id: number, ctx) => {
  return await rse_strategy_repository.list_stakeholder_choosen(id)
})
