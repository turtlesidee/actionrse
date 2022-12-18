import { FormikProps } from "../components/inputs/types"
import get from "lodash.get"


export const field = (formik: FormikProps, name: string): [any, any, any] => {
  const path = name.split('.')

  const value = get(formik.values, path)
  const error = get(formik.errors, path)
  const touched = get(formik.touched, path)

  return [value, error, touched]
}
