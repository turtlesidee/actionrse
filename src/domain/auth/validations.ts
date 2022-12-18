import { z } from "zod"


export const user_lastname = z.string().min(1).max(100).transform((str) => str.toUpperCase()).refine((str) => str.length > 1, { message: "Le nom doit faire plus de 1 caractère" })
export const user_firstname = z.string().min(1).max(100).refine((str) => str.length > 1, { message: "Le prénom doit faire plus de 1 caractère" })
export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim()).refine((str) => str.length > 1, { message: "L'email est invalide" })

export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim())

export const Signup = z.object({
  email,
  password,
})

export const Login = z.object({
  email,
  password: z.string(),
})

export const ForgotPassword = z.object({
  email,
})

export const ResetPassword = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // set the path of the error
  })

export const ChangePassword = z.object({
  currentPassword: z.string(),
  newPassword: password,
})
