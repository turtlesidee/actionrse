import { z } from 'zod';
import { create_company_form } from "../../components/create-company/logic"

export const create_company = create_company_form

export type CreateCompany = z.infer<typeof create_company>
export type CreateCompanyResponse = any
export type CreateCompanyFn = (input: CreateCompany) => Promise<CreateCompanyResponse>

