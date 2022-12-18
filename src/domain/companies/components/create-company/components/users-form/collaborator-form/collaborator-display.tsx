import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"
import React, { FC } from "react"

type ExpertDisplayProps = {
  formik: FormikProps
}

const CollaboratorDisplay: FC<ExpertDisplayProps> = ({ formik }) => {

  return (
    <div className="mt-[32px]">
      <img src={formik.values.collaborator.avatar_url} className="rounded-full w-[100px] m-auto" />
      <div className="mt-[15px]">
        <p className="text-center"> {formik.values.collaborator.lastname} {formik.values.collaborator.firstname} </p>
        <p className="text-center text-[13px] text-neutral-500"> {formik.values.collaborator.email} </p>
      </div>
    </div>
  )
}

export default CollaboratorDisplay
