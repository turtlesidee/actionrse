import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"
import React, { FC } from "react"

type ExpertDisplayProps = {
  formik: FormikProps
}

const ExpertDisplay: FC<ExpertDisplayProps> = ({ formik }) => {

  return (
    <div className="mt-[32px]">
      <img src={formik.values.expert.avatar_url} className="rounded-full w-[100px] m-auto" />
      <div className="mt-[15px]">
        <p className="text-center"> {formik.values.expert.lastname} {formik.values.expert.firstname} </p>
        <p className="text-center text-[13px] text-neutral-500"> {formik.values.expert.email} </p>
      </div>
    </div>
  )
}

export default ExpertDisplay
