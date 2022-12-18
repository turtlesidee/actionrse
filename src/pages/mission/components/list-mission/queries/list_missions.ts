import { resolver } from "@blitzjs/rpc"
import rse_mission_repository from "../../../../../infrastructure/repositories/rse_strategy_repository"





export default resolver.pipe( async (_, ctx) => {
  return await rse_mission_repository.list_rse_mission()
})
