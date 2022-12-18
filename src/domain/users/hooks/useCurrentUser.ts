import { useQuery } from "@blitzjs/rpc"
import getCurrentUser from "src/domain/users/queries/getCurrentUser"

export const useCurrentUser = () => {
  const [user] = useQuery(getCurrentUser, null)
  return user
}
