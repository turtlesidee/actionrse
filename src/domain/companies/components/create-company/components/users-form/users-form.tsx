import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"
import React, { FC } from 'react';
import LeaderForm from "./leader-form/leader-form"
import ExpertForm from "./expert-form/expert-form"
import CollaboratorForm from "./collaborator-form/collaborator-form"

type UsersFormProps = {
  formik: FormikProps
}
const UsersForm: FC<UsersFormProps> = ({ formik }) => {
  const company_selected = !!formik.values.company_information.name

  if (!company_selected) return null

  return (
    <>
      <div className="w-3/4 h-[1px] bg-neutral-400 m-auto mt-[60px] mb-[60px]" />
      <div className="flex">
        <LeaderForm formik={formik} />
        <ExpertForm formik={formik} />
        <CollaboratorForm formik={formik} />
      </div>
    </>
  )
}

export default UsersForm
