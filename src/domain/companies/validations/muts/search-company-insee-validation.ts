import { z } from 'zod'
import {
  Company,
  company_name,

} from "../../validations"


export const search_insee_company = z.object({
  company_name: company_name
})

export type SearchInseeCompanyResponse = Company[] | []
export type SearchInseeCompanyFn = (input: z.infer<typeof search_insee_company>) => Promise<SearchInseeCompanyResponse>
