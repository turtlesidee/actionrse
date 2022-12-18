import { z } from 'zod';
import { Motive, motive, Strategy, strategy } from "./validations"


export const identification_of_motivation_form = z.object({
  motives: z.array(motive),
  strategies: z.array(strategy),
});

export type IdentificationOfMotivationForm = z.infer<typeof identification_of_motivation_form>

export const initial_values = {
  motives: [] as Motive[],
  strategies: [] as Strategy[],
}

export const on_submit = (mission_id: number, update_step: any, fn: any) => async (values: IdentificationOfMotivationForm) => {
  await fn({ id: mission_id, motives: values.motives, strategies: values.strategies })
  update_step(2)
}
