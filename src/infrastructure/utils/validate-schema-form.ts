//@ts-nocheck
import { ZodSchema } from "zod"

export const validateSchema = (schema: ZodSchema) => async (values: unknown) => {
  const result = await schema.spa(values);

  if (result.success) {
    return {};
  }

  let errors: any = {};

  result.error.issues.forEach((issue) => {

    if (issue.path.length === 1) {
      errors[issue.path[0]] = issue.message;
      return;
    }

    if (issue.path.length === 2) {
      if (!(issue.path[0] in errors)) {
        errors[issue.path[0]] = {};
      }

      errors[issue.path[0]][issue.path[1]] = issue.message;

      return;
    }

    if (issue.path.length === 3) {
      if (!(issue.path[0] in errors)) {
        errors[issue.path[0]] = {};
      }

      if (!(issue.path[1] in errors[issue.path[0]])) {
        errors[issue.path[0]][issue.path[1]] = {};
      }

      errors[issue.path[0]][issue.path[1]][issue.path[2]] = issue.message;

      return;
    }

    if (issue.path.length === 4) {

      if (!(issue.path[0] in errors)) {
        errors[issue.path[0]] = {};
      }

      if (!(issue.path[1] in errors[issue.path[0]])) {
        errors[issue.path[0]][issue.path[1]] = {};
      }

      if (!(issue.path[2] in errors[issue.path[0]][issue.path[1]])) {
        errors[issue.path[0]][issue.path[1]] = {};
      }


      errors[issue.path[0]][issue.path[1]][issue.path[2]][issue.path[3]] = issue.message;

      return;
    }

  })

  return errors;
}
