
import React, { FC } from 'react'
import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"

type ExpertErrorProps = {
  formik: FormikProps
}
const ExpertError: FC<ExpertErrorProps> = ({ formik }) => {
  const has_error = formik.errors.expert && formik.touched.expert
  return (
    <>
      { has_error && <p className="text-red-500 text-[12px] text-center"> Choissisez un expert</p>}
    </>
  )
}

export default ExpertError
