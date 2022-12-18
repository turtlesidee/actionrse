
import React, { FC } from 'react';
import { FormikProps } from "../../../../infrastructure/components/inputs/types"
import Button from "../../../../infrastructure/components/inputs/button"

type ButtonFormProps = {
  formik: FormikProps
}

const ButtonForm: FC<ButtonFormProps> = ({ formik }) => {

  const has_action = formik.values.inventory && formik.values.inventory.length > 0

  if (!has_action) return (
    <div className="mt-[75px] flex justify-center mb-[75px]">
      <Button label="Pas d'action" type="submit" />
    </div>
  )

  return (
    <div className="mt-[75px] flex justify-center mb-[75px]">
      <Button label="Suivant" type="submit" />
    </div>

  )
};

export default ButtonForm;
