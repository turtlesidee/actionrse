import { z } from 'zod'

export const select_company_form = z.object({
  id: z.number().min(1),
})

export type SelectCompanyForm = z.infer<typeof select_company_form>

export const initial_values = {
  id: -1,
}

export const on_submit = (create_mission: any, fn: any, nextPage: any) => async (values: SelectCompanyForm) => {

  const res = await create_mission({ company_id: values.id })

}
