import Header from "./components/header/header"
import LogoBand from "../logo-band/logo-band"
import ButtonAddAction from "./components/button-add-action/button-add-action"
import AddAction from "./components/add-action/add-action"
import { useFormik } from "formik"
import { create_inventory_form, initial_values, on_submit } from "./logic"
import { validateSchema } from "../../../../infrastructure/utils/validate-schema-form"
import Card from "./components/card/card"
import ButtonForm from "./button-form"
import { FC } from "react"
import { useMutation } from "@blitzjs/rpc"
import create_inventory_mutation from "../mutations/create-inventory"

type InventoryProps = {
  mission_id: number,
  update_mission_step: (step: number) => void
}
const Inventory: FC<InventoryProps> = ({ mission_id, update_mission_step}) => {
  const [create_inventory] = useMutation(create_inventory_mutation)
  const formik = useFormik({
    initialValues: initial_values,
    onSubmit: on_submit(mission_id, update_mission_step, create_inventory),
    validate: validateSchema(create_inventory_form)
  })

  return (
    <div>
      <LogoBand />
      <Header />
      <form onSubmit={formik.handleSubmit}>
        { formik.values.inventory.map((action, index) => <Card key={index} action={action} index={index} formik={formik} />) }
        <AddAction formik_parent={ formik} />
        <ButtonAddAction />
        <ButtonForm formik={formik} />
      </form>
    </div>
  )
}

export default Inventory
