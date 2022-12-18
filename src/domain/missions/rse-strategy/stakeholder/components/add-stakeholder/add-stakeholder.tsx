import { Dialog } from '@headlessui/react'
import React, {FC} from "react"
import { useRecoilState } from "recoil"
import { add_stakeholder_form, add_stakeholder_form_open, initial_values, on_submit } from "./logic"
import { XMarkIcon} from "@heroicons/react/24/solid"
import InputBox from "../../../../../../infrastructure/components/inputs/input-box"
import { useFormik } from "formik"
import { validateSchema } from "../../../../../../infrastructure/utils/validate-schema-form"
import { RadioGroup } from "@headlessui/react"
import SliderBox from "../../../../../../infrastructure/components/inputs/slider-box"
import Button from "../../../../../../infrastructure/components/inputs/button"
import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"
import { $add } from "../../../../../../infrastructure/utils/array"

type AddStakeholderProps = {
  formik_parent: FormikProps
}

const AddStakeholder: FC<AddStakeholderProps> = ({ formik_parent }) => {
  const [open, setOpen] = useRecoilState(add_stakeholder_form_open)
  const formik = useFormik({
    initialValues: initial_values,
    onSubmit: (values) => {
      formik_parent.setFieldValue('stakeholders', $add(formik_parent.values.stakeholders, values))
      setOpen(false)
      formik.resetForm()
    },
    validate: validateSchema(add_stakeholder_form)
  })

  return (
    <Dialog onClose={() => {}} open={open}>
      <div className="bg-neutral-100 w-[600px] absolute left-1/2 -translate-x-2/4 px-[30px] border border-neutral-400 rounded-xl top-1/2 -translate-y-2/4">
        <div className="flex mt-[32px]">
          <XMarkIcon className="ml-auto w-[20px] fill-neutral-800 cursor-pointer hover:fill-error-text"  onClick={() => {setOpen(false); formik.resetForm()}} />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <InputBox formik={formik} name="name" label="Partie prenante" className="mb-[18px]"/>
            <InputBox formik={formik} name="email" label="Email" />
          </div>
          <div>
            <RadioGroup value={formik.values.state} onChange={(e) => formik.setFieldValue('state', e)}>
              <div className="flex justify-center mt-[45px]">
                <RadioGroup.Option value="intern">
                    <span className='p-[12px] font-medium text-neutral-800 mr-[32px] cursor-pointer ui-checked:bg-neutral-800 ui-checked:text-neutral-100 rounded'>INTERNE</span>
                </RadioGroup.Option>
                <RadioGroup.Option value="extern">
                  <span className='font-medium text-neutral-800 p-[12px] cursor-pointer ui-checked:bg-neutral-800 ui-checked:text-neutral-100 rounded'>EXTERNE</span>
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          </div>
          <div className="mt-[42px] mb-[60px]">
            <SliderBox name='importance' formik={formik} label="Importance" className="mb-[24px]" />
            <SliderBox name='influence' formik={formik} label="Influence" className="mb-[24px]" />
            <SliderBox name='support' formik={formik} label="Support" />
          </div>
          <Button label={formik.isSubmitting ? "En cours..." : "Ajouter"} className="block m-auto mb-[32px]" type='submit' />
        </form>
      </div>
    </Dialog>
  )
}

export default AddStakeholder
