import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"


export const on_expert_found =  (formik: FormikProps) => async (expert: any) => {
  await formik.setFieldValue('expert', expert)
}

export const on_expert_switch = (formik: FormikProps) => async () => {
  await formik.setFieldValue('expert', { lastname: '', firstname: '', email: '' })
}
