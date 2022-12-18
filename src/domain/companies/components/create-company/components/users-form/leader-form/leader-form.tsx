import React, { FC } from 'react';
import { FormikProps } from "../../../../../../../infrastructure/components/inputs/types"
import InputBox from "../../../../../../../infrastructure/components/inputs/input-box"
import style from "./style"

type LeaderFormProps = {
  formik: FormikProps
}
const LeaderForm: FC<LeaderFormProps> = ({ formik}) => {

  return (
      <div css={style.container}>
        <div css={style.title}>
          <h1 className="text-center"> DIRIGEANT </h1>
        </div>

        <div css={style.inputs.container}>
          <InputBox name='leader.lastname' formik={formik} placeholder="Nom" css={style.inputs.self} />
          <InputBox name='leader.firstname' formik={formik} placeholder="Prenom" css={style.inputs.self} />
          <InputBox name='leader.email' formik={formik} placeholder="Email" css={style.inputs.self} />
        </div>
      </div>
  )
}

export default LeaderForm
