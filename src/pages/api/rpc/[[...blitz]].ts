import { rpcHandler } from "@blitzjs/rpc"
import { api } from "src/infrastructure/blitz/blitz-server"

export default api(rpcHandler({ onError: console.log }))
