import { resolver } from "@blitzjs/rpc"
import { search_user_mutation } from "../validation"
import UserRepository from "../../../infrastructure/repositories/user_repository"
export default resolver.pipe(resolver.zod(search_user_mutation), async ({ name , role}) => {
  return await UserRepository.search(name.toUpperCase(), role.toUpperCase())
})
