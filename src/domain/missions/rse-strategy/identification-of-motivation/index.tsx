import LogoBand from "../logo-band/logo-band"
import Header from "./components/header/header"
import { identification_of_motivation_form, initial_values, on_submit } from "./logic"
import { useFormik } from "formik"
import { validateSchema } from "../../../../infrastructure/utils/validate-schema-form"
import ButtonAddMotive from "./components/button-add-motive/button-add-motive"
import ButtonAddStrategy from "./components/button-add-strategy/button-add-strategy"
import AddMotive from "./components/add-motive/add-motive"
import CardMotive from "./components/card-motive/card-motive"
import AddStrategy from "./components/add-strategy/add-strategy"
import CardStrategy from "./components/card-strategy/card-strategy"
import ButtonForm from "./button-form"
import { FC } from "react"
import { useMutation } from "@blitzjs/rpc"
import create_identification  from "../mutations/create-identification"

type IdentificationOfMotivationProps = {
  mission_id: number,
  update_mission_step: (step: number) => void
}
const IdentificationOfMotivation: FC<IdentificationOfMotivationProps> = ({ mission_id, update_mission_step }) => {
  const [create_identif] = useMutation(create_identification)
  const formik = useFormik({
    initialValues: initial_values,
    onSubmit: on_submit(mission_id, update_mission_step, create_identif),
    validate: validateSchema(identification_of_motivation_form)
  })

  return (
    <div >
      <LogoBand />
      <Header />
      <form onSubmit={formik.handleSubmit} >
        <div className="flex pt-[32px]">
          <div className="w-1/2  border-r border-neutral-400">
            <h1 className="text-neutral-800 font-bold text-[26px] text-center mb-[32px]"> Motivations </h1>
            <AddMotive formik_parent={formik} />
            {formik.values.motives.map((motive, index) => <CardMotive key={index} name={motive.name} index={index} formik={formik} />)}
            <ButtonAddMotive />
          </div>
          <div className="w-1/2  h-[100px]">
            <h1 className="text-neutral-800 font-bold text-[26px] text-center mb-[32px]"> Stratégies </h1>
            <AddStrategy formik_parent={formik} />
            {formik.values.strategies.map((strategy, index) => <CardStrategy key={index} name={strategy.name} index={index} formik={formik} />)}
            <ButtonAddStrategy />
          </div>

        </div>
        <ButtonForm formik={formik} />
      </form>
    </div>
  )
}

export default IdentificationOfMotivation
