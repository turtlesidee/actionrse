import { z } from "zod";
import { email, user_firstname, user_lastname } from "../../../auth/validations"
import {
  company,
} from "../../validations"
import { isCompanyAlreadyExistsError } from "../../errors/company-already-exists"
import { CreateCompanyFn } from "../../validations/muts/create-company-validation"
export const create_company_form = z.object({
  company_information: company,
  leader: z.object({
    firstname: user_firstname,
    lastname: user_lastname,
    email: email
  }),
  expert: z.object({
    firstname: user_firstname,
    lastname: user_lastname,
    email: email,
    id: z.number()
  }),
  collaborator: z.object({
    firstname: user_firstname,
    lastname: user_lastname,
    email: email,
    id: z.number()
  })
})
export type CreateCompanyForm = z.infer<typeof create_company_form>
export const initial_values = {
  company_name: '',
  company_information: {
    siret: '',
    naf: '',
    address: '',
    date: '',
    name: ''
  },
  leader: {
    lastname: '',
    firstname: '',
    email: ''
  },
  expert: {
    lastname: '',
    firstname: '',
    email: '',
    id: -1
  },
  collaborator: {
    lastname: '',
    firstname: '',
    email: '',
    id: -1
  },
}
export const on_submit =  (create: CreateCompanyFn, fn: any, nextPage: any) => async (values: CreateCompanyForm) => {
  try {

    // @ts-ignore
    const res = await create(values)
    fn(res.id, res.public_id, values.company_information.name)
    nextPage()
  } catch (e) {
    console.log(e)
    if (isCompanyAlreadyExistsError(e)) {
      alert('Cette entreprise existe déjà')
    }
  }
}
