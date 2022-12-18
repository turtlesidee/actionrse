import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"


export const on_collaborator_found =  (formik: FormikProps) => async (collaborator: any) => {
  await formik.setFieldValue('collaborator', collaborator)
}

export const on_collaborator_switch = (formik: FormikProps) => async () => {
  await formik.setFieldValue('collaborator', { lastname: '', firstname: '', email: '' })
}
