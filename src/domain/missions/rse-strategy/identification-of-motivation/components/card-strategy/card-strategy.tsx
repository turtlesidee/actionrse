import React, { FC } from "react"
import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"
import { $delete } from "../../../../../../infrastructure/utils/array"


type CardStrategyProps = {
  name: string,
  index: number,
  formik: FormikProps
}
const CardStrategy: FC<CardStrategyProps> = ({ name, index, formik}) => {

  return (
    <div
      className={`flex justify-center items-center mb-[16px] text-[18px] font-light text-neutral-800 px-[16px] py-[8px] cursor-pointer hover:text-error-text hover:line-through `}
      onClick={() => { formik.setFieldValue('strategies', $delete(formik.values.strategies, index))}}
    >
      {name}
    </div>
  )
}

export default CardStrategy
