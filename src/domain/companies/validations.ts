import { z } from "zod";
import { email, user_firstname, user_lastname } from "../auth/validations"

export const company_name = z.string().min(1).max(100);
export const company_address = z.string().min(1).max(100);
export const company_naf = z.string().min(1).max(100);
export const company_siret = z.string().min(1).max(100);
export const company_creation_date = z.string().min(10).max(10);


export const company = z.object({
  name: company_name,
  address: company_address,
  naf: company_naf,
  siret: company_siret,
  date: company_creation_date,
})

export type Company = z.infer<typeof company>

export const SearchCompany = z.object({
  name: company_name,
})
