import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import InputBox from "../../../../../../infrastructure/components/inputs/input-box"
import Button from "../../../../../../infrastructure/components/inputs/button"
import React, {FC } from "react"
import { useRecoilState } from "recoil"

import { useFormik } from "formik"
import { $add } from "../../../../../../infrastructure/utils/array"
import { validateSchema } from "../../../../../../infrastructure/utils/validate-schema-form"
import { add_motive_form, add_motive_form_open, initial_values } from "./logic"
import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"


type AddMotiveProps = {
  formik_parent: FormikProps
}

const AddMotive: FC<AddMotiveProps> = ({ formik_parent }) => {
  const [open, setOpen] = useRecoilState(add_motive_form_open)
  const formik = useFormik({
    initialValues: initial_values,
    onSubmit: (values) => {
      formik_parent.setFieldValue('motives', $add(formik_parent.values.motives, values))
      setOpen(false)
      formik.resetForm()
    },
    validate: validateSchema(add_motive_form)
  })
  return (
    <Dialog onClose={() => {}} open={open}>
      <div className="bg-neutral-100 w-[600px] absolute left-1/2 -translate-x-2/4 px-[30px] border border-neutral-400 rounded-xl top-1/2 -translate-y-2/4">
        <div className="flex mt-[32px]">
          <XMarkIcon className="ml-auto w-[20px] fill-neutral-800 cursor-pointer hover:fill-error-text"  onClick={() => {setOpen(false); formik.resetForm()}} />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <InputBox formik={formik} name="name" label="Motivation" className="mb-[18px]"/>
          </div>

          <Button label={formik.isSubmitting ? "En cours..." : "Ajouter"} className="block m-auto mb-[32px] mt-[32px]" type='submit' />
        </form>
      </div>
    </Dialog>
  )

}

export default AddMotive;
