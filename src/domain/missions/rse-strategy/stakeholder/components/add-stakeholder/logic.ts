import { atom } from 'recoil'
import { z } from 'zod'
import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"
import { $add } from "../../../../../../infrastructure/utils/array"
import { FormikHelpers } from "formik"
export const add_stakeholder_form_open = atom({
  key: 'add_stakeholder_form_open',
  default: false,
})

export const add_stakeholder_form = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().min(1).max(100),
  state: z.enum(['intern', 'extern']),
  importance: z.number().min(1).max(100),
  influence: z.number().min(1).max(100),
  support: z.number().min(1).max(100),
});

export type AddStakeholderForm = z.infer<typeof add_stakeholder_form>

export const initial_values = {
  name: '',
  email: '',
  state: 'intern',
  importance: 50,
  influence: 50,
  support: 50,
}

export const on_submit = (formik_parent: FormikProps, setOpen: (state: boolean) => void) => async (values: AddStakeholderForm, helpers: FormikHelpers<any>) => {

  formik_parent.setFieldValue('stakeholders', $add(formik_parent.values.stakeholders, values))
  setOpen(false)
}
