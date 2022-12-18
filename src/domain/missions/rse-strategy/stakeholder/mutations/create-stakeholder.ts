import { resolver } from "@blitzjs/rpc"
import { z } from 'zod';
import stakeholder_repository from "../../../../../infrastructure/repositories/rse_strategy_repository"


const create_stakeholder = z.object({
  id: z.number(),
  stakeholders: z.array(z.any())
})
export default resolver.pipe(resolver.zod(create_stakeholder), async (data, ctx): Promise<any> => {
    return stakeholder_repository.create_stakeholders(data.id, data.stakeholders)
});
