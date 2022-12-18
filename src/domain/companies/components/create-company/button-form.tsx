
import React, { FC } from 'react';
import { FormikProps } from "../../../../infrastructure/components/inputs/types"
import Button from "../../../../infrastructure/components/inputs/button"

type ButtonFormProps = {
  formik: FormikProps
}

const ButtonForm: FC<ButtonFormProps> = ({ formik }) => {

  const company_selected = !!formik.values.company_information.name

  if (!company_selected) return null

  return (
    <div className="mt-[75px] flex justify-center mb-[75px]">
      <Button label="Creer l'entreprise" type="submit" />
    </div>

  )
};

export default ButtonForm;
