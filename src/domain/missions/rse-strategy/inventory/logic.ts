import { z } from 'zod'
import { add_action_form } from "./components/add-action/logic"

export const create_inventory_form = z.array(add_action_form)

export type CreateInventoryForm = z.infer<typeof create_inventory_form>

export const initial_values = {
  inventory: [] as CreateInventoryForm[]
}

export const on_submit = (mission_id: number, update_step: any, fn: any) => async (values: any) => {

  try {
    await fn({ id: mission_id, actions: values.inventory })
    update_step(3)
  } catch (e) {
    console.log(e)
  }

}
