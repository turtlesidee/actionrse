import { atom } from "recoil"
import { z } from "zod"

export const add_motive_form_open = atom({
  key: 'add_motive_form_open',
  default: false,
})

export const add_motive_form = z.object({
  name: z.string().min(1).max(100),
});

export type AddMotiveForm = z.infer<typeof add_motive_form>

export const initial_values = {
  name: '',
}

export const on_submit = async (values: AddMotiveForm) => {
  console.log(values);
}
