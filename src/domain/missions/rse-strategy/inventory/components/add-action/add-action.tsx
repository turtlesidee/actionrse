import React, { FC } from "react"
import { useRecoilState } from "recoil"
import { useFormik } from "formik"
import { validateSchema } from "../../../../../../infrastructure/utils/validate-schema-form"
import { Dialog, RadioGroup } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import InputBox from "../../../../../../infrastructure/components/inputs/input-box"
import SliderBox from "../../../../../../infrastructure/components/inputs/slider-box"
import Button from "../../../../../../infrastructure/components/inputs/button"
import { FormikProps } from "../../../../../../infrastructure/components/inputs/types"
import { add_action_form, add_action_form_open, initial_values } from "./logic"
import SelectBox from "../../../../../../infrastructure/components/inputs/select-box"
import { $add } from "../../../../../../infrastructure/utils/array"


type AddActionProps = {
  formik_parent: FormikProps
}

const typeOptions = [
  { value: 'gouvernance', display: 'Gouvernance' },
  { value: 'laws', display: "Droits de l'homme" },
  { value: 'work', display: 'Relation et condition de travail' },
  { value: 'environment', display: 'Environnement' },
  { value: 'loyalty', display: 'Loyautes des pratiques' },
  { value: 'consumer', display: 'Question relatives aux consommateurs' },
  { value: 'community', display: 'Communautes et developpement local' },

];

const mapper = (v: string) => {
  if (v === 'gouvernance') return 'Gouvernance';
  if (v === 'laws') return "Droits de l'homme";
  if (v === 'work') return 'Relation et condition de travail';
  if (v === 'environment') return 'Environnement';
  if (v === 'loyalty') return 'Loyautes des pratiques';
  if (v === 'consumer') return 'Question relatives aux consommateurs';
  if (v === 'community') return 'Communautes et developpement local';

  return v
}

const AddAction: FC<AddActionProps> = ({formik_parent}) => {
  const [open, setOpen] = useRecoilState(add_action_form_open)
  const formik = useFormik({
    initialValues: initial_values,
    onSubmit: (values) => {
      formik_parent.setFieldValue('inventory', $add(formik_parent.values.inventory, values))
      setOpen(false)
      formik.resetForm()
    },
    validate: validateSchema(add_action_form)
  })

  return (
    <Dialog onClose={() => {}} open={open}>
      <div className="bg-neutral-100 w-[600px] absolute left-1/2 -translate-x-2/4 px-[30px] border border-neutral-400 rounded-xl top-1/2 -translate-y-2/4">
        <div className="flex mt-[32px]">
          <XMarkIcon className="ml-auto w-[20px] fill-neutral-800 cursor-pointer hover:fill-error-text"  onClick={() => {setOpen(false); formik.resetForm()}} />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <InputBox formik={formik} name="name" label="Action" className="mb-[18px]"/>
          </div>
          <div>
            <SelectBox name='type' options={typeOptions} formik={formik} mapper={mapper} />
          </div>

          <Button label={formik.isSubmitting ? "En cours..." : "Ajouter"} className="block m-auto mb-[32px] mt-[32px]" type='submit' />
        </form>
      </div>
    </Dialog>
  )
}

export default AddAction
