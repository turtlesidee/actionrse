import AddStakeholder from "./components/add-stakeholder/add-stakeholder"

import LogoBand from "../logo-band/logo-band"
import Header from "./components/header/header"
import ButtonAddStakeholder from "./components/button-add-stakeholder/button-add-stakeholder"
import Card from "./components/card/card"
import { Stakeholder } from "./validations"
import { useFormik } from "formik"
import { initial_values, on_submit, stakeholder_form } from "./logic"
import { validateSchema } from "../../../../infrastructure/utils/validate-schema-form"
import ButtonForm from "./button-form"
import { useMutation } from "@blitzjs/rpc"
import createStakeholder from "./mutations/create-stakeholder"


type IndexProps = {
  mission_id: number,
  update_mission_step: (step: number) => void
}
const Index = (props: IndexProps) => {
  const [createStakeholders] = useMutation(createStakeholder)
  const formik = useFormik({
    initialValues: initial_values,
    onSubmit: on_submit(props.mission_id, props.update_mission_step, createStakeholders),
    validate: validateSchema(stakeholder_form)
  })

  return (
    <div className="relative">
      <LogoBand />
      <Header />
      <form onSubmit={formik.handleSubmit}>
        { formik.values.stakeholders.map((stakeholder, index) => <Card key={index} stakeholder={stakeholder} index={index} formik={formik} />) }
        <AddStakeholder formik_parent={formik} />
        <ButtonAddStakeholder />
        <ButtonForm formik={formik} />
      </form>
    </div>
  )
}

export default Index
