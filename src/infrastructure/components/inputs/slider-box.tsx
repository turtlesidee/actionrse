import React, { FC } from "react"
import { FormikProps } from "./types"
import { field } from "../../utils/field"


type SliderBoxProps = {
  name: string,
  formik: FormikProps,
  className?: string,
  label?:string
}
const SliderBox: FC<SliderBoxProps> = ({ formik, name, className, label}) => {
  const [value, error, touched] = field(formik, name)

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="text-neutral-800 text-[16px] font-medium">{label}</label>}
      <input type="range" min="1" max="100" name={name} value={value} onChange={formik.handleChange} className={`custom-slider`} />
    </div>
  )
}

export default SliderBox
