import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"
import React, { FC } from 'react';
import SearchUser from "../../../../../../users/components/inputs/search-user"
import style from "./style"
import CollaboratorError from "./collaborator-error"
import CollaboratorDisplay from "./collaborator-display"
import { on_collaborator_found, on_collaborator_switch } from "./logic"
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid"

type ExpertFormProps = {
  formik: FormikProps
}
const CollaboratorForm: FC<ExpertFormProps> = ({ formik }) => {

  const is_selected = !!formik.values.collaborator.lastname
  return (
    <div css={style.container}>
      <div css={style.title.container}>
        <h1 className="text-center"> COLLABORATEUR </h1>
        { is_selected && <ArrowsRightLeftIcon css={style.title.icon} onClick={on_collaborator_switch(formik)}/>}
      </div>
      <CollaboratorError formik={formik} />
      { !is_selected && <SearchUser role={'COLLABORATOR'} onClick={on_collaborator_found(formik)} /> }

      { is_selected && <CollaboratorDisplay formik={formik} />}
    </div>
  )
}

export default CollaboratorForm
