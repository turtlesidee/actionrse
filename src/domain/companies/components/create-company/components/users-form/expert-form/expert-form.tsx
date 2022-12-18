import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"
import React, { FC } from 'react';
import SearchUser from "../../../../../../users/components/inputs/search-user"
import style from "./style"
import ExpertError from "./expert-error"
import ExpertDisplay from "./expert-display"
import { on_expert_found, on_expert_switch } from "./logic"
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid"

type ExpertFormProps = {
  formik: FormikProps
}
const ExpertForm: FC<ExpertFormProps> = ({ formik }) => {

  const is_selected = !!formik.values.expert.lastname
  return (
    <div css={style.container}>
      <div css={style.title.container}>
        <h1 className="text-center"> EXPERT-COMPTABLE </h1>
        { is_selected && <ArrowsRightLeftIcon css={style.title.icon} onClick={on_expert_switch(formik)}/>}
      </div>
      <ExpertError formik={formik} />
      { !is_selected && <SearchUser role={'EXPERT'} onClick={on_expert_found(formik)} /> }
      { is_selected && <ExpertDisplay formik={formik} />}

    </div>
  )
}

export default ExpertForm
