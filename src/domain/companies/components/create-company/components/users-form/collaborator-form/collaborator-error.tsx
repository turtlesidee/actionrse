
import React, { FC } from 'react'
import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"

type ExpertErrorProps = {
  formik: FormikProps
}
const CollaboratorError: FC<ExpertErrorProps> = ({ formik }) => {

  return (
    <>
      { formik.errors.collaborator && formik.touched.collaborator && <p className="text-red-500 text-[12px] text-center">Choissisez un collaborateur</p>}
    </>
  )
}

export default CollaboratorError
