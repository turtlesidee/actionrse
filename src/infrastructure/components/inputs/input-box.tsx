import React, { FC, HTMLInputTypeAttribute } from "react"
import tw from "twin.macro"
import get from 'lodash.get'
import { FormikValues } from "formik"



type InputBoxProps = {
  className?: string
  placeholder?:string
  label?: string
  removable?: boolean
  type?: HTMLInputTypeAttribute,
  name: string,
  formik: {
    values: Record<any, any>,
    errors: {},
    touched: {},
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setValues: (values: FormikValues, shouldValidate?: boolean | undefined) => void,
    setFieldTouched: (field: string, touched?: boolean | undefined, shouldValidate?: boolean | undefined) => void,
    setFieldError: (field: string, message: string | undefined) => void,
  }
};


const style = {
  label: [tw`block text-neutral-800 text-[16px] mb-[8px] font-medium`],
  input:  [
    tw`w-full h-[50px] m-auto pl-2 rounded-lg bg-neutral-100`,
    tw`border border-neutral-400 focus:border-neutral-500`,
    tw`text-neutral-600`,
    tw`appearance-none outline-none`,
  ],
  error: [tw`text-red-500 text-[14px] ml-[8px] mt-[4px] italic`]
}
const InputBox: FC<InputBoxProps> = ({ removable, type, name, formik, label , placeholder,className}) => {
  const path = name.split('.')

  const value = get(formik.values, path)
  const error = get(formik.errors, path)
  const touched = get(formik.touched, path)

  return (
    <div className={`w-full ${className}`}>
      {label && <label css={style.label}>{label}</label>}
      <input type={type} css={style.input} name={name} value={value} onChange={formik.handleChange} placeholder={placeholder} />
      {error && touched && <div css={style.error}>{error}</div>}
    </div>
  )

}

export default InputBox
