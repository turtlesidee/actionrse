import { atom } from "recoil"
import { z } from "zod"

export const add_strategy_form_open = atom({
  key: 'add_strategy_form_open',
  default: false,
})

export const add_strategy_form = z.object({
  name: z.string().min(1).max(100),
});

export type AddStrategyForm = z.infer<typeof add_strategy_form>

export const initial_values = {
  name: '',
}

export const on_submit = async (values: AddStrategyForm) => {
  console.log(values);
}
