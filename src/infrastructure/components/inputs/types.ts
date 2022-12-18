import React from "react"
import { FormikValues } from "formik"

export type FormikProps = {
  values: Record<any, any>,
  errors: Record<any, any>,
  touched: Record<any, any>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  setValues: (values: FormikValues, shouldValidate?: boolean | undefined) => void,
  setFieldTouched: (field: string, touched?: boolean | undefined, shouldValidate?: boolean | undefined) => void,
  setFieldError: (field: string, message: string | undefined) => void,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
  setErrors: (errors: {}) => void,
  resetForm: (nextState?: Partial<FormikValues> | undefined) => void,
}

