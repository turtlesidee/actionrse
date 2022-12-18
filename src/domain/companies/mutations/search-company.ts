import { resolver} from "@blitzjs/rpc"
import { SearchCompany } from "../validations"
import company_repository from "../../../infrastructure/repositories/company_repository"
export default resolver.pipe(resolver.zod(SearchCompany), async ({ name }) => {
  return await company_repository.search(name.toUpperCase()) || []
})

