
import React, { FC } from 'react';
import { FormikProps } from "../../../../infrastructure/components/inputs/types"
import Button from "../../../../infrastructure/components/inputs/button"

type ButtonFormProps = {
  formik: FormikProps
}

const ButtonForm: FC<ButtonFormProps> = ({ formik }) => {

  const has_action = formik.values.motives && formik.values.motives.length > 0 || formik.values.strategies && formik.values.strategies.length > 0

  if (!has_action) return null

  return (
    <div className="mt-[75px] flex justify-center mb-[75px]">
      <Button label="Suivant" type="submit" />
    </div>

  )
};

export default ButtonForm;
