import { z } from "zod"
import { atom } from "recoil"
import { action_name, action_type } from "../../validations"

export const add_action_form_open = atom({
  key: 'add_action_form_open',
  default: false,
})
export const add_action_form = z.object({
  name: action_name,
  type: action_type
});

export type AddActionForm = z.infer<typeof add_action_form>

export const initial_values = {
  name: '',
  type: '',
}

export const on_submit = async (values: AddActionForm) => {
  console.log(values);
}
